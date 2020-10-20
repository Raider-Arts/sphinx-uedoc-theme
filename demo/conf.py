# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
import os
import sys
sys.path.insert(0, os.path.abspath('../'))


# -- Project information -----------------------------------------------------

project = 'Uedoc Demo'
copyright = '2020, Luca Faggion'
author = 'Luca Faggion'


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = ['sphinx.ext.githubpages']

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = 'uedoc_theme'

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']

# Path to themes
html_theme_path = ['../']

# override the pygments of the theme
# pygments_style = 'abap'

numfig = True

#option for theme
html_theme_options = {
    'quicklinks': [{'name': 'Quick Link',
                    'subnav': [ {'name': 'subnav Website1', 'link': 'https://www.unrealengine.com/en-US/'},
                                {'name': 'subnav Website2', 'link': 'https://www.unrealengine.com/en-US/'},
                                {'name': 'subnav Website3', 'link': 'https://www.unrealengine.com/en-US/'},
                                {'name': 'subnav Website4', 'link': 'https://www.unrealengine.com/en-US/'}
                    ]},
                    {'name': 'Quick Link1', 'link': 'https://www.unrealengine.com/en-US/'},
                    {'name': 'Quick Link2', 'link': 'https://www.unrealengine.com/en-US/'},
                    {'name': 'Quick Link3', 'link': 'https://www.unrealengine.com/en-US/'},
                    {'name': 'Quick Link4', 'link': 'https://www.unrealengine.com/en-US/'}],
    'socials': {'fab,twitter':      'https://twitter.com/',
                'fab,facebook':     'https://facebook.com/',
                'fab,twitch':       'http://www.twitch.tv/',
                'fab,instagram':    'http://instagram.com/',
                'fab,youtube':      'http://www.youtube.com/',
                'fa,rss':          'http://rss'},
    'footerlinks': [{'name': 'Unreal Website',       'link': 'https://www.unrealengine.com/en-US/'},
                    {'name': 'Personal Portfolio',   'link': 'https://github.com/darkimage'},
                    {'name': 'other link',           'link': 'https://github.com/darkimage'},
                    {'name': 'other link1',          'link': 'https://github.com/darkimage'},
                    {'name': 'other link3',          'link': 'https://github.com/darkimage'},
                    {'name': 'other link4',          'link': 'https://github.com/darkimage'},
                    {'name': 'a lot of link',        'link': 'https://github.com/darkimage'},
                    {'name': 'last link',            'link': 'https://github.com/darkimage'}],
    "header_button": {'name': 'Download', 'link': 'https://www.unrealengine.com/en-US/'}
}