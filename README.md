# Birthday Reminder App

## About this app

The Birthday Reminder App is a React SPA for keeping a record of the birthdays of your friends and family.

Users have the ability to Add, Edit and Delete birthday reminders and the data is persisted in Local Storage.

When a birthday falls within 30 days of the current date, a visual reminder is given to the user that the birthday is coming up soon. If the birthday falls on the current date, again a visual reminder is given to ensure the user remembers to wish a happy birthday to the relevant person!

The app can be viewed at [https://birthday-reminder-navy.vercel.app/](https://birthday-reminder-navy.vercel.app/).

## Development

During development of this app I used the following technologies/dependecies:

- React
- PropTypes
- Styled Components
- React Datepicker
- UUID

I chose this particular project as it is a beginner friendly, small application, but it also gives me a basic platform to use when I learn new technologies/concepts to incorporate them here first. For example, I can add unit tests and convert the project to TypeScript in due course for a bit of added complexity.

## Future Improvements

I have some improvements in mind for this application:

- Firstly, I would like to add unit tests using Jest/React Testing Library to give more assurance against bugs if the code is changed in the future.
- Secondly, I would like to convert the project to TypeScript to replace PropTypes to give more power to the typing.
- Thirdly, when performing a Lighthouse audit on the application, it only scores 80 for performance and 81 for accessibility. I would like to look in to this more and see if it is possible to improve the Lighthouse scores. One possibility could be the fact I have animated the "height" property of a component, which goes against best practices.
