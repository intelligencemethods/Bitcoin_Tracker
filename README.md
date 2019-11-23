# Bitcoin Tracker 

Bitcointracker is a react web app which shows you valuation of bitcoin's in different currencies.

## Getting Started

To run this project:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm start` to start the local server (this project uses create-react-app)

Required Dependencies :

- `react-mobile-picker --save`    
- `axios`

## Functionality overview

The Solution is a Bitcoin Tracker app. It uses Bitcoinaverage to get all the data regarding bitcoin values for different currencies.

**General functionality:**

- Make requests to bitcoinaverage for bitcoin rates data for different currencies.

-  Iterate through the data received from bitcoiaverage.

- Allocate the data to Picker 
