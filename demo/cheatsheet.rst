Sphinx Cheatsheet Commands
===========================

Collection of default sphinx commands

.. _sec-text-formatting:

Text Formatting
================

Simple text formatting:

*italic*

**bold**

Bullet lists:

* bullet 1
* bullet 2
* bullet 3

Numbered lists:

#. item 1
#. item 2
#. item 3

Code for :ref:`sec-text-formatting`.
::

	*italic*
	**bold**

	Bullet lists:
	* bullet 1
	* bullet 2
	* bullet 3

	Numbered lists:
	#. item 1
	#. item 2
	#. item 3

.. _sec-headers:

Headers
========

Headers can be added by using different underlining. Optionally, an
header can have a label. You can make references to a header using
its label as follows: Section :ref:`sec-heading`.

Heading Level 1
================

Heading Level 2
----------------

Heading Level 3
^^^^^^^^^^^^^^^^

Heading Level 4
~~~~~~~~~~~~~~~~

.. _sec-heading:

Heading with label
------------------

Code for :ref:`sec-headers`.
::

	Heading Level 1
	================

	Heading Level 2
	----------------

	Heading Level 3
	^^^^^^^^^^^^^^^^

	Heading Level 4
	~~~~~~~~~~~~~~~~

	.. _sec-heading:

	Heading with label
	------------------

.. _sec-figures:

Figures
=======

Figure are created using the following code. A figure points to a
filename and has a caption. Optionally, you can add a label and set
the width, alignment and other common figure properties. You can
make references to a figure using its label as follows: Figure
:numref:`fig-lake`.

.. _fig-lake:

.. figure:: _static/lake-at-cottage.jpg
   :width: 400px
   :align: center

   Photo by `Kodiak1 <https://freeimages.com//photographer/Kodiak1-56473>`_

Code for :ref:`sec-figures`.
::

	.. _fig-lake:

	.. figure:: _static/lake-at-cottage.jpg
	:width: 400px
	:align: center

	Photo by `Kodiak1 <https://freeimages.com//photographer/Kodiak1-56473>`_

.. _sec-tables:

Tables
=======

Tables are created using the following code. A table has a
captionfigure points to a filename and has a caption. Optionally,
you can add a label. You can make references to a table using its
label as follows: Table :numref:`tab-wave-breaking`.

.. _tab-wave-breaking:

.. table:: Different wave breaking formulations implemented

   +-----------------------------+-----------------+------------------+
   | Wave breaking formula       | Type of waves   | keyword          |
   +=============================+=================+==================+
   | Roelvink (1993a)            | Instationary    | roelvink1        |
   +-----------------------------+-----------------+------------------+
   | Roelvink (1993a) extended   | Instationary    | roelvink2        |
   +-----------------------------+-----------------+------------------+
   | Daly et al. (2010)          | Instationary    | roelvink_daly    |
   +-----------------------------+-----------------+------------------+
   | Baldock et al. (1998)       | Stationary      | baldock          |
   +-----------------------------+-----------------+------------------+
   | Janssen & Battjes (2007)    | Stationary      | janssen          |
   +-----------------------------+-----------------+------------------+



::
