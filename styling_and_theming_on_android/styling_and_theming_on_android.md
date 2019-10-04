---

theme: "white"

---

# Styling & Theming on Android:
# A Primer

---

## Attributes

Specify attribute values for view properties in XML.
``` XML
<TextView
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:text="Hello, world!" />
```

Get attribute values in code.
``` Java
// Not real code, but something like it!
public TextView(Context context, 
                @Nullable AttributeSet attrs) {
    TypedArray attributes = context.obtainStyledAttributes(
        attrs,
        R.styleable.TextViewAppearance);

    CharSequence text = 
        attributes.getText(R.styleable.TextView_text);
    setText(text);

    attributes.recycle();
}
```

---

## Custom Attributes

Declare the attribute:
``` XML
<declare-styleable name="AwesomeButton">
    <attr name="awesomeness" format="float"/>
</declare-styleable>
```

Use the attribute:
``` XML
<uk.co.bbc.iplayer.AwesomeButton
    android:layout_width="96dp"
    android:layout_height="48dp"
    android:layout_gravity="center"
    app:awesomeness="1.0" />
```

Code is the same. :)

---

## Problem: Duplication

``` XML
<uk.co.bbc.iplayer.AwesomeButton
    android:layout_width="96dp"
    android:layout_height="48dp"
    android:layout_gravity="center"
    app:awesomeness="1.0" />

<uk.co.bbc.iplayer.AwesomeButton
    android:layout_width="96dp"
    android:layout_height="48dp"
    android:layout_gravity="center"
    app:awesomeness="1.0" />

<uk.co.bbc.iplayer.AwesomeButton
    android:layout_width="96dp"
    android:layout_height="48dp"
    android:layout_gravity="center"
    app:awesomeness="1.0" />
```

---

## Solution: Styles

Define a style:
``` XML
<style name="AwesomeButtonStyle">
    <item name="android:layout_width">96dp</item>
    <item name="android:layout_height">48dp</item>
    <item name="android:layout_gravity">center</item>
    <item name="awesomeness">1.0</item>
</style>
```

Use it:
``` XML
<uk.co.bbc.iplayer.AwesomeButton
    style="@style/AwesomeButtonStyle" />

<uk.co.bbc.iplayer.AwesomeButton
    style="@style/AwesomeButtonStyle" />

<uk.co.bbc.iplayer.AwesomeButton
    style="@style/AwesomeButtonStyle" />
```

---

## Problem: More duplication

``` XML
<style name="AwesomeButtonStyle_ExtraAwesome">
    <item name="android:layout_width">96dp</item>
    <item name="android:layout_height">48dp</item>
    <item name="android:layout_gravity">center</item>
    <item name="awesomeness">2.0</item>
</style>

<style name="AwesomeButtonStyle_Big">
    <item name="android:layout_width">128dp< /item>
    <item name="android:layout_height">64dp</item>
    <item name="android:layout_gravity">center</item>
    <item name="awesomeness">1.0</item>
</style>
```

---

## Solution: Inheritance

``` XML
<!-- Explicit parent -->
<style name="AwesomeButtonStyle_ExtraAwesome" 
       parent="AwesomeButtonStyle">
    <item name="awesomeness">2.0</item>
</style>

<!-- Hierarchical naming -->
<style name="AwesomeButtonStyle.Big">
    <item name="android:layout_width">128dp</item>
    <item name="android:layout_height">64dp</item>
</style>
```

---

## Problem: Duplication (again)

``` XML
<style name="AwesomeButtonStyle">
    <item name="android:layout_width">96dp</item>
    <item name="android:layout_height">48dp</item>
    <!-- Other properties here... -->
</style>

<style name="AwesomeImageStyle">
    <item name="android:layout_width">96dp</item>
    <item name="android:layout_height">48dp</item>
    <!-- Other properties here... -->
</style>
```

---

## Recap

* Attributes specify properties for views.
  * property -> value
* When you inflate XML, attribute sets are passed to views.
* Styles are re-usable attribute sets.
  * Map: properties -> values
* Styles can extend other styles.
  * Can add properties.
  * Can override  properties.

---

## Problem: Dark mode

(...and related problems)

* Change styles at runtime.
  * (...or just for some screens.)
  * (...or just for some components.)
* Duplicate whole style hierarchy?
* How do we apply styles?

---

## Problem: Duplication (again!)

<attr>

``` XML
<style name="AwesomeTitleStyle">
    <item name="android:textColor">@color/neon_black</item>
    <item name="android:background">@color/neon_white</item>
    <!-- Other properties here... -->
</style>

<style name="AwesomeLabelStyle">
    <item name="android:textColor">@color/neon_black</item>
    <item name="android:background">@color/neon_white</item>
</style>

<style name="AwesomeButtonStyle">
    <item name="android:textColor">@color/neon_black</item>
    <item name="android:background">@color/neon_white</item>
</style>
```

---

## Solution: Themes

> A theme is a type of style that's applied to an entire app, activity, or view hierarchy—not just an individual view.

---

## Theme inheritance

\<TODO: Insert awesome diagram here>

---

Specify attributes in themes
``` XML
<style name="AwesomeTheme_Light">
    <item name="android:textColor">@color/neon_black</item>
    <item name="android:background">@color/neon_white</item>
    <!-- Other attributes defined here... -->
</style>

<style name="AwesomeTheme_Dark">
    <item name="android:textColor">@color/neon_white</item>
    <item name="android:background">@color/neon_black</item>
</style>
```

---

### Apply themes statically

* Activities:
  * In the manifest.
  * NOT on the root view of the hierarchy. (?)
* Fragments:
  * On the root view of the hierarchy.
  * NOT in `<fragment>` tags.
* Views/ViewGroups:
  * In XML.

---

### Apply themes at run time

* Activities:
  * `setTheme()` (BEFORE the views are inflated)
* Fragments & Views/Viewgroups:
  * `ContextThemeWrapper`

``` Kotlin
var themeId: Int = R.style.MyTheme

var wrappedContext: Context = 
    new ContextThemeWrapper(context, themeId)

var layoutInflater = LayoutInflater.from(wrappedContext)
layoutInflater.inflate(R.layout.awesome_layout, parentView)
```

---

## Problem

Need more than one value for an attribute
``` XML
<style name="AwesomeLabelStyle">
    <item name="android:textColor">@color/neon_pink</item>
</style>
```

...how do you theme it?!

---

## Solution: "Global attributes"

1. Declare it
``` XML
<!-- Inside a resource block, NOT a declare-styleable block -->
<attr name="awesomeLabelColor" format="reference|color" />
```

2. Specify values in themes (same as for standard android attributes).

3. Reference "global attributes" in styles
``` XML
<style name="AwesomeTitleStyle">
    <!-- Can use '?awesomeTextColor' 
         or '?attr/awesomeTextColor' -->
    <item name="android:textColor">?awesomeTextColor</item>
</style>
```

---

## Recap

* Themes are just styles.
  * ...which apply to a whole hierarchy.
  * ...and can be applied at run time.
* "Global attributes" are custom properties for themes.

---

## Not covered in this talk

* Attributes can be references.
  * ...to other attributes.
  * ...to styles. (And presumably themes!)
* Themes & the designer.
* Default styles.
* Order of precedence for attibutes.

---

## Pros & cons

* Pros
  * Can be applied at run time.
  * Flexible.
  * Reduce duplication.
* Cons
  * Too flexible?
  * Where do 
