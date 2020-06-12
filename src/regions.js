const regions = [
	{
		name: "Тюменская область",
		code: "7200000000000"
	},
	{
		name: "Тамбовская область",
		code: "6800000000000"
	},
	{
		name: "Владимирская область",
		code: "3300000000000"
	},
	{
		name: "г. Севастополь",
		code: "9200000000000"
	},
	{
		name: "Пермский край",
		code: "5900000000000"
	},
	{
		name: "Ямало-Ненецкий АО",
		code: "8900000000000"
	},
	{
		name: "Пензенская область",
		code: "5800000000000"
	},
	{
		name: "Республика Коми",
		code: "1100000000000"
	},
	{
		name: "Ставропольский край",
		code: "2600000000000"
	},
	{
		name: "Республика Марий Эл",
		code: "1200000000000"
	},
	{
		name: "Еврейская автономная область",
		code: "7900000000000"
	},
	{
		name: "Карачаево-Черкесская Республика",
		code: "0900000000000"
	},
	{
		name: "Брянская область",
		code: "3200000000000"
	},
	{
		name: "Республика Бурятия",
		code: "0300000000000"
	},
	{
		name: "г. Байконур",
		code: "9900000000000"
	},
	{
		name: "Архангельская область",
		code: "2900000000000"
	},
	{
		name: "г. Санкт-Петербург",
		code: "7800000000000"
	},
	{
		name: "Чувашская Республика",
		code: "2100000000000"
	},
	{
		name: "Ярославская область",
		code: "7600000000000"
	},
	{
		name: "Тульская область",
		code: "7100000000000"
	},
	{
		name: "Липецкая область",
		code: "4800000000000"
	},
	{
		name: "Омская область",
		code: "5500000000000"
	},
	{
		name: "Кемеровская область",
		code: "4200000000000"
	},
	{
		name: "Курская область",
		code: "4600000000000"
	},
	{
		name: "г. Москва",
		code: "7700000000000"
	},
	{
		name: "Республика Крым",
		code: "9100000000000"
	},
	{
		name: "Республика Алтай",
		code: "0400000000000"
	},
	{
		name: "Иркутская область",
		code: "3800000000000"
	},
	{
		name: "Сахалинская область",
		code: "6500000000000"
	},
	{
		name: "Приморский край",
		code: "2500000000000"
	},
	{
		name: "Северная Осетия-Алания",
		code: "1500000000000"
	},
	{
		name: "Белгородская область",
		code: "3100000000000"
	},
	{
		name: "Волгоградская область",
		code: "3400000000000"
	},
	{
		name: "Чукотский автономный округ",
		code: "8700000000000"
	},
	{
		name: "Оренбургская область",
		code: "5600000000000"
	},
	{
		name: "Республика Ингушетия",
		code: "0600000000000"
	},
	{
		name: "Тверская область",
		code: "6900000000000"
	},
	{
		name: "Ивановская область",
		code: "3700000000000"
	},
	{
		name: "Ненецкий автономный округ",
		code: "8300000000000"
	},
	{
		name: "Республика Мордовия",
		code: "1300000000000"
	},
	{
		name: "Республика Карелия",
		code: "1000000000000"
	},
	{
		name: "Ульяновская область",
		code: "7300000000000"
	},
	{
		name: "Кабардино-Балкарская Республика",
		code: "0700000000000"
	},
	{
		name: "Смоленская область",
		code: "6700000000000"
	},
	{
		name: "Томская область",
		code: "7000000000000"
	},
	{
		name: "Орловская область",
		code: "5700000000000"
	},
	{
		name: "Воронежская область",
		code: "3600000000000"
	},
	{
		name: "Республика Калмыкия",
		code: "0800000000000"
	},
	{
		name: "Удмуртская Республика",
		code: "1800000000000"
	},
	{
		name: "Свердловская область",
		code: "6600000000000"
	},
	{
		name: "Московская область",
		code: "5000000000000"
	},
	{
		name: "Нижегородская область",
		code: "5200000000000"
	},
	{
		name: "Вологодская область",
		code: "3500000000000"
	},
	{
		name: "Хабаровский край",
		code: "2700000000000"
	},
	{
		name: "Псковская область",
		code: "6000000000000"
	},
	{
		name: "Новгородская область",
		code: "5300000000000"
	},
	{
		name: "Республика Башкортостан",
		code: "0200000000000"
	},
	{
		name: "Ленинградская область",
		code: "4700000000000"
	},
	{
		name: "Красноярский край",
		code: "2400000000000"
	},
	{
		name: "Калужская область",
		code: "4000000000000"
	},
	{
		name: "Саратовская область",
		code: "6400000000000"
	},
	{
		name: "Мурманская область",
		code: "5100000000000"
	},
	{
		name: "Республика Тыва",
		code: "1700000000000"
	},
	{
		name: "Самарская область",
		code: "6300000000000"
	},
	{
		name: "Республика Хакасия",
		code: "1900000000000"
	},
	{
		name: "Кировская область",
		code: "4300000000000"
	},
	{
		name: "Астраханская область",
		code: "3000000000000"
	},
	{
		name: "Амурская область",
		code: "2800000000000"
	},
	{
		name: "Ростовская область",
		code: "6100000000000"
	},
	{
		name: "Курганская область",
		code: "4500000000000"
	},
	{
		name: "Чеченская Республика",
		code: "2000000000000"
	},
	{
		name: "Калининградская область",
		code: "3900000000000"
	},
	{
		name: "Рязанская область",
		code: "6200000000000"
	},
	{
		name: "Новосибирская область",
		code: "5400000000000"
	},
	{
		name: "Магаданская область",
		code: "4900000000000"
	},
	{
		name: "Республика Адыгея",
		code: "0100000000000"
	},
	{
		name: "Республика Татарстан",
		code: "1600000000000"
	},
	{
		name: "Костромская область",
		code: "4400000000000"
	},
	{
		name: "Алтайский край",
		code: "2200000000000"
	},
	{
		name: "Забайкальский край",
		code: "7500000000000"
	},
	{
		name: "Ханты-Мансийский АО - Югра",
		code: "8600000000000"
	},
	{
		name: "Республика Саха (Якутия)",
		code: "1400000000000"
	},
	{
		name: "Республика Дагестан",
		code: "0500000000000"
	},
	{
		name: "Краснодарский край",
		code: "2300000000000"
	},
	{
		name: "Челябинская область",
		code: "7400000000000"
	}
]

export default regions
