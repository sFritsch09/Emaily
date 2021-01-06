const formFields = [
	{
		label: 'Survey Title',
		name: 'title',
		noValueError: 'You must provide a Survey Title',
		placeholder: 'Corona Impfung',
	},
	{
		label: 'Subject Line',
		name: 'subject',
		noValueError: 'You must provide a Subject',
		placeholder: 'Umfrage',
	},
	{
		label: 'Email Body',
		name: 'body',
		noValueError: 'You must provide a Message',
		placeholder: 'Werden Sie sich gegen COVID-19 impfen lassen?',
	},
	{
		label: 'Recipients',
		name: 'recipients',
		noValueError: 'You must provide a Email List',
		placeholder: 'email@example.com, email2@example.com...',
	},
];

export default formFields;
