from os.path import abspath, join, dirname

from ._version import __version__

def setup(app):
    static_path = abspath(join(dirname(__file__), '_static'))
    app.connect('builder-inited', lambda app: app.config.html_static_path.append(static_path))

    if hasattr(app, 'add_js_file'):
        app.add_js_file('minipres.js')
    else:
        #app.add_stylesheet("minipres.css")
        app.add_javascript('minipres.js')

    return {
        'version': '0.1',
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }
