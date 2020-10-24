# sphinx-uedoc-theme
Unreal Engine documentation look and feel theme for Python [Sphinx](https://www.sphinx-doc.org/en/master/)

You can see the theme in action on the [**ONLINE DEMO**](https://raider-arts.github.io/sphinx-uedoc-theme/)

![theme_preview](https://github.com/Raider-Arts/sphinx-uedoc-theme/raw/master/theme_preview.png)

## Installation

Install it via pip

> `pip install sphinx-uedoc-theme`

## Usage

In Sphinx `conf.py`:

> ```python
>...
>extensions = ['sphinx_uedoc_theme']
>...
>html_theme = 'uedoc_theme'
>...
>html_theme_options = {'put here the values for the options'}
>...
>```

## Customizable Options

This is a list of all the theme options:

| **Option** |**Default**| **Description**   |
|---|---|---|
| logo |None| this sets the path to the logo on the top right area, the logo image source must be placed in the _static folder of the docs|
|quicklinks|None| a dictionary of links to add to the navbar of the theme, sub navigation is possible with 2 level of depth see the demo [conf.py](https://github.com/Raider-Arts/sphinx-uedoc-theme/blob/a206d2ecf411630116d48afa6bc19a2f176bb019/demo/conf.py#L64) for an example|
|socials|None| a dictionary of social links with the relative [fontaweasome](https://fontawesome.com/icons?d=gallery&s=brands) brand icon as key see the demo [conf.py](https://github.com/Raider-Arts/sphinx-uedoc-theme/blob/a206d2ecf411630116d48afa6bc19a2f176bb019/demo/conf.py#L74) for an example|
|footerlinks|None|an array of dictionary entries used to add links in the footer area of the theme see the demo [conf.py](https://github.com/Raider-Arts/sphinx-uedoc-theme/blob/a206d2ecf411630116d48afa6bc19a2f176bb019/demo/conf.py#L80) for an example|
|show_totop_button|true| show or hide the go to top arrow button in the footer area of the theme|
|header_button|None| a dictionary with a link and a name for right button of the navbar of the theme, if left blank no button would be rendered|
|no_logo|False| if set to true the default logo is hidden, if no logo is specified the default logo is always shown if you want to hide it set this to true|
|header_search|true| whether or not show the search bar in the navigation menu in mobile|

## Customizing the Color Scheme
you can customize the color scheme of the theme by overrding the [default css variables](https://github.com/Raider-Arts/sphinx-uedoc-theme/blob/7e550dd9a9e16f200b330f69849f9aea6b25e94b/src/css/_variables.scss#L1)

The variables are HSL separated values if you want to see the compiled values look the compiled css
Heres the compiled css with the default values:
```css
:root {
    --clr-background-h: 0;
    --clr-background-s: 0%;
    --clr-background-l: 100%;
    --clr-primary-h: 0;
    --clr-primary-s: 0%;
    --clr-primary-l: 16%;
    --clr-secondary-h: 197;
    --clr-secondary-s: 92%;
    --clr-secondary-l: 49%;
    --clr-text-primary-h: 0;
    --clr-text-primary-s: 0%;
    --clr-text-primary-l: 100%;
    --clr-text-secondary-h: 0;
    --clr-text-secondary-s: 0%;
    --clr-text-secondary-l: 100%;
    --clr-text-background-h: 0;
    --clr-text-background-s: 0%;
    --clr-text-background-l: 0%;
    --clr-primary-gradient-start: hsla(var(--clr-primary-hsl), 0);
    --clr-primary-gradient-end: hsla(var(--clr-primary-hsl), 0.95);
    --clr-scrollbar: transparent;
    --clr-scrollbar-thumb: hsla(var(--clr-primary-h), var(--clr-primary-s), 82%, 0.6);
}
```

## Development Requisites
If you want to contribuite with the development of the theme you can setup a local development enviroment, these are my suggestion and the one i used to develop the theme.

### Requisites
- [NPM](https://www.npmjs.com/)
- Python 3.7

The theme i developed using [SCSS](https://sass-lang.com/), JS and webpack to bring all the asset to web standars stadands.

So here are the steps to setup a working enviroment:

1. `git clone` the repository to your local machine
2. `cd sphinx-uedoc-theme` (navigate to the cloned repo root folder)
3. `npm i` (to install all the needed dependencies)
4. At this point i suggest to createa python [virtual env](https://docs.python.org/3/tutorial/venv.html) using a tool of your choice (i use [conda](https://www.anaconda.com/) to manage my virtual envs)
5. `pip install -r requirements.txt` (install the python dependencies using pip)
6. Start making changes
7. Use `webpack prod` or `webpack dev` to build the theme


