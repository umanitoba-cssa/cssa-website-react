# CSSA Website

New 2023 website for the CSSA written in Typescript with React and Chakra UI.

## Build and Development

### Setup Local Development

To get started with development:

1. Download and install [NodeJS LTS Version](https://nodejs.org/en/download)
2. Clone this git repository
3. Open a terminal in the cloned folder
4. Run the command `yarn install`
5. Launch the development server with `yarn start`

[Visual Studio Code](https://code.visualstudio.com/) is recommended for development, however any TypeScript enabled IDE or text editor will work.

### Deploy Website

Simply merge a PR from the `main` branch to the `release` branch. GitHub Actions will automatically deploy the website to GitHub Pages.

### Export Static Build

If you need to export a static build locally for testing, run `yarn build`.

## Data

### Update Events

You can update the displayed list of events in the file at `./public/data/events.json`. This file should have the following schema:

```json
[
    {
        "title": "string",
        "description": "string",
        "location": "string",
        "time": "date time string*",
        "image": "img url",
        "to": "url (optional)"
    },
    ...
]
```

\* See [date time string format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format)

You can simply commit changes to this file to the repo, it is not necessary to rebuild the website for the changes to be displayed.

### Update Exec Team List

You can update the displayed list of execs in the file at `./public/data/team.json`. This file should ahve the following schema:

```json
{
    "execs": [
        {
            "name": "string",
            "position": "string",
            "image": "img url",
            "website": "website url (optional)",
            "instagram": "instagram url (optional)",
            "linkedin": "linkedin url (optional)",
            "github": "github url (optional)"
        },
        ...
    ]
}
```

You can simply commit changes to this file to the repo, it is not necessary to rebuild the website for the changes to be displayed.

### Update Lounge Canteen Prices

Lounge canteen prices are automatically pulled and parsed from a CSV file at `./public/data/canteen.csv`. Our current internal sheets document has a tab setup for this, simply download the CSV file for that tab and replace the file. If you don't have this file anymore, the important part is that columns are in the following order with the exact headings displayed:

```
Items,Sale Price,Category
```

For example:

```
Items,Sale Price,Category
Cheese Cracker Dips,$0.50,Snack
Freezies,$0.50,Snack
Chewy Yogurt Granola Bar,$0.75,Snack
Quaker Chewy Bars,$0.75,Snack
Dipps Granola Bars,$0.75,Snack
Nature Valley Granola Bars,$0.75,Snack
...
```

The website will automatically group items together by category, with items sorted by price within their category.

## Image Credits
- [Images by pch.vector]("https://www.freepik.com/free-vector/diverse-crowd-people-different-ages-races_7732608.htm#page=2&query=meeting&position=12&from_view=search&track=sph") on Freepik

## License

This work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).