"""Setup data structures module."""


from setuptools import setup

setup(
    name="Data structures",
    description="implementation for common data structures",
    version=0.1,
    author=["Shaikat Majumdar"],
    author_email=["sm2774us@gmail.com"],
    licencse="MIT",
    package_dir={'': 'src'},
    py_modules=[],
    extras_require={
        "test": ["pytest", "pytest-cov", "tox", 'coveralls']
    }
)
