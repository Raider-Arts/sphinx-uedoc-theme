# sphinx-uedoc-theme
Unreal Engine documentation look and feel theme for Python [Sphinx](https://www.sphinx-doc.org/en/master/)


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
|header_search| whether or not show the search bar in the navigation menu in mobile|

## Customizing the Color Scheme
#TODO: add the guide to customizing the color scheme

## Development Requisites

TODO:Development guide