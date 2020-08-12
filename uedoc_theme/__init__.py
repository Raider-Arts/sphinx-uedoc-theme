import os

__version__ = '0.0.1'

def setup(app):
    app.add_html_theme('uedoc_theme', os.path.abspath(os.path.dirname(__file__)))
    return {
        'version': __version__,
        'parallel_read_safe': True
    }