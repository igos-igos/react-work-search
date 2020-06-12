import React, {Component} from "react";
import VacancySearchInput from "../../components/VacancySearchInput/VacancySearchInput";
import axiosConfig from "../../axiosConfig";
import VacancyCard from "../../components/VacancyCard/VacancyCard";
import VacancyModal from "../../components/VacancyModal/VacancyModal";
import VacancyPagePagination from "../../components/VacancyPagePagination/VacancyPagePagination";

export default class SearchPage extends Component {

	state = {
		pageTitle: 'Вакансии, обновленные сегодня:',
		searchQuery: '',
		vacancy: [],
		vacancyDetail: null,
		region: 6600000000000,
		vacancyOpen: false,
		vacancyOnPage: [],
		currentPage: 1,
		vacancyPerPage: 10
	}

	date = new Date()
	currentDay = this.date.getDate() - 1
	currentMonth = this.date.getMonth() + 1
	currentYear = this.date.getFullYear()

	paginationClickHandler = (event) => {

		window.scrollTo({
			top: 0,
			behavior: "smooth"
		})

		this.setState({
			currentPage: Number(event.target.id)
		})
	}

	modalOpenHandler = (data) => {
		this.setState({
			vacancyOpen: true
		})
	}

	modalCloseHandler = () => {
		this.setState({
			vacancyOpen: false
		})
	}

	searchButtonHandler = async () => {
		try {
			const response = await axiosConfig.get('/region/' + this.state.region + '?text=' + this.state.searchQuery)
			let vacancy = []
			vacancy.push(...response.data.results.vacancies)
			this.setState({
				pageTitle: 'Вакансии по запросу "' + this.state.searchQuery + '":',
				vacancy: vacancy,
				currentPage: 1
			})
		} catch (error) {
			console.log(error)
		}
	}

	async componentDidMount() {
		try {
			const response = await axiosConfig
				.get('region/' + this.state.region + '?offset=1&limit=100&modifiedFrom=' + this.currentYear + '-' + this.currentMonth + '-' + this.currentDay + 'T00:00:00Z')
			let vacancy = []
			vacancy.push(...response.data.results.vacancies)
			this.setState({
				vacancy: vacancy,
				currentPage: 1
			})
		} catch (error) {
			console.log(error)
		}
	}

	searchInputHandler = (event) => {
		this.setState({
			searchQuery: event.target.value
		})
	}

	renderVacancyPerPage() {
		const vacancy = this.state.vacancy
		const indexOfLastVacancy = this.state.currentPage * this.state.vacancyPerPage
		const indentOfFirstVacancy = indexOfLastVacancy - this.state.vacancyPerPage
		const currentVacancy = vacancy.slice(indentOfFirstVacancy, indexOfLastVacancy)

		return currentVacancy.map((vacancy) => {
			return (
				<VacancyCard
					key={vacancy.vacancy.id}
					data={vacancy.vacancy}
					openVacancy={() => {
						this.setState({
							vacancyDetail: vacancy.vacancy,
							vacancyOpen: true
						})
					}}
				/>
			)
		})
	}

	render() {

		return (

			<div className="pt-3 pb-3 SearchPage">
				<VacancySearchInput
					searchInput={this.searchInputHandler}
					searchButton={this.searchButtonHandler}
				/>

				<span className="d-block font-weight-bold pageTitle mb-3">{this.state.pageTitle}</span>

				{this.state.vacancy.length > 10
					?
					<VacancyPagePagination
						data={this.state.vacancy}
						currentPage={this.state.currentPage}
						click={this.paginationClickHandler}
					/>
					: null}

				{this.renderVacancyPerPage()}

				{this.state.vacancyDetail
					?
					<VacancyModal
						open={this.state.vacancyOpen}
						handleClose={this.modalCloseHandler}
						handleShow={this.modalOpenHandler}
						data={this.state.vacancyDetail}
					/> : null}

				{this.state.vacancy.length > 10
					?
					<VacancyPagePagination
						data={this.state.vacancy}
						currentPage={this.state.currentPage}
						click={this.paginationClickHandler}
					/>
					: null}
			</div>
		)
	}
}
