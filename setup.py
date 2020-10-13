import setuptools

with open("README.rst", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="sphinx_minipres",
    version="0.0.1.dev0",
    author="Richard Darst",
    #author_email="",
    description="Sphinx extension to turn any web page into a lightweight presentation",
    long_description=long_description,
    url="https://github.com/rkdarst/sphinx-minipres",
    packages=setuptools.find_packages(),
    package_data={
        "sphinx_minipres": ['_static/*'],
        },
    #py_modules=["minipres"],
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Development Status :: 3 - Alpha",
        "Framework :: Sphinx",
    ],
)
