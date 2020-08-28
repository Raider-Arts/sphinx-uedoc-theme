Sphinx Cheatsheet Commands
===========================
.. highlight:: rst

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


Code for :ref:`sec-tables`.
::

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

.. _sec-eqations:

Equations
=========

Equations can be created using Latex math code or by copying and
pasting from MathType. An equation is created using the following
code. An equation has a label. You can make references to an
equation using its label as follows: Equation :eq:`eikonal`.

.. math::
   :label: eikonal

   \begin{array}{l}
   {k_{x} =k_{x}^{n-1} +k_{x}^{:} } \\
   {k_{y} =k_{y}^{n-1} +k_{y}^{:} } \\
   \end{array}

Inline math can be added as follows: :math:`k_x`.

Code for :ref:`sec-eqations`.

::

	.. math::
		:label: eikonal

		\begin{array}{l}
		{k_{x} =k_{x}^{n-1} +k_{x}^{:} } \\
		{k_{y} =k_{y}^{n-1} +k_{y}^{:} } \\
		\end{array}

	Inline math can be added as follows: :math:`k_x`.

.. _sec-toc:

Table of contents
=================

This directive inserts a “TOC tree” at the current location, using the individual TOCs (including “sub-TOC trees”) of the documents given in the directive body. Relative document names (not beginning with a slash) are relative to the document the directive occurs in, absolute names are relative to the source directory. A numeric maxdepth option may be given to indicate the depth of the tree; by default, all levels are included.

Simple Table of contents:

.. toctree::
	very/index

Numbered Table of contents:

.. toctree::
	:numbered:

	reference

Titled Table of contents:

.. toctree::
	:caption: Titled Toctree

	extensions

Referenced Table of contents :ref:`toc-ref`:

.. toctree::
	:caption: Titled Toctree
	:name: toc-ref

	reference

Code for :ref:`sec-toc`:
::

	Simple Table of contents:

	.. toctree::
		very/index

	Numbered Table of contents:

	.. toctree::
		:numbered:

		reference

	Titled Table of contents:

	.. toctree::
		:caption: Titled Toctree

		extensions

	Referenced Table of contents :ref:`toc-ref`:

	.. toctree::
		:caption: Titled Toctree
		:name: toc-ref

		reference


.. _sec-citations:

Citations
=========

Standard reST citations (ref) are supported, with the additional feature that they are “global”, i.e. all citations can be referenced from all files. Use them like so:

Lorem ipsum [Ref]_ dolor sit amet.

.. [Ref] Book or article reference, URL or whatever.

Citation usage is similar to footnote usage, but with a label that is not numeric or begins with #.

Code for :ref:`sec-citations`.
::

	Lorem ipsum [Ref]_ dolor sit amet.

	.. [Ref] Book or article reference, URL or whatever.
