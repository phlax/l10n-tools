l10n-tools
==========

A browser addon for localization.

- Connects online translation platforms (eg.
  `Pontoon <https://github.com/mozilla/pontoon/>`_,
  `Pootle <https://github.com/translate/pootle/>`_,
  `Weblate <https://github.com/WeblateOrg/weblate/>`_)
  with localization repositories (eg. hosted on `Github <https://github.com/>`_)
- Adds custom translation services, eg translation memory, machine translation.
- Adds customizable checks framework


|build| |coverage|


Development install
-------------------

First install `makeyfile <http://github.com/phlax/makeyfile/>`_. (you may want to do this in a virtualenv)

.. code-block:: console

  $ pip install makeyfile


Next, fetch the ``l10n-tools`` repo

.. code-block:: console

  $ git clone git@github.com:phlax/l10n-tools
  $ cd l10n-tools


Now you can setup your environment (npm/webpack)

.. code-block:: console

  $ makey setup



Development usage
-----------------

You can run a sandboxed firefox with the plugin like so


.. code-block:: console

  $ makey firefox-ext


To specify a custom version of firefox, you can pass the ``-f`` flag

.. code-block:: console

  $ makey firefox-ext -f /path/to/my/firefox


Running webpack with ``watch``
------------------------------

While developing its useful to have your javascript assets rebuilt
whenever you make changes.

You can do so with:

.. code-block:: console

  $ makey webpack -w


.. |build| image:: https://img.shields.io/travis/phlax/l10n-tools/master.svg?style=flat-square
        :alt: Build Status
        :target: https://travis-ci.org/phlax/l10n-tools/branches


.. |coverage| image:: https://img.shields.io/codecov/c/github/phlax/l10n-tools/master.svg?style=flat-square
        :target: https://codecov.io/gh/phlax/l10n-tools/branch/master
        :alt: Test Coverage
