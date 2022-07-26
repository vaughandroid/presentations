---

theme: "Moon"
transition: "fade"
defaultTiming: "20"

---

## Writing more readable tests

![Clarity pills](img/clarity.jpg)

<aside class="notes">
Writing "good" tests is a huge topic, which I'm not going to even attempt to cover in 20 minutes.

Instead, I'm going to focus on one area - making your tests more readable - and try to offer
some tips and practices that have helped me over the years.
</aside>

---

## Why it's important

* Time reading > time writing
  * We skim read
* Tests are part of your codebase
* Tests are documentation

<aside class="notes">
Readability trumps everything else, becaues we need to understand code before we can change it. Readable code is improvable code, so if the requirements change or it's incorrect or too slow, we can deal with that. If your code is difficult to understand, it's difficult to reason about and to change.

We skim read, because our brains like to take shortcuts.

Tests are just as much a part of your codebase as production code. Sometimes there is a tendancy to treat them as somehow secondary, but you need to maintain and update them just like you do with production code.

There are many benefits to automated tests, but of the roles they can play is as documentation. If your documentation is crap then people won't read it.
</aside>

---

## Readable code

* Simplicity
* Descriptive names
* Consistent style
* etc.

<aside class="notes">
These should all be fairly familiar. Tests are code, so the usual techniques apply.

Other techniques:
* Use a consistent level of abstraction.
* Return early or return at the end.
* Avoid long methods.
</aside>

---

## Maximise signal : noise

1. Emphasise what's important
2. Minimise or hide the repetitive bits

<aside class="notes">
This is more of a guiding principal than a specific technique, but it can really help to keep it in mind.

One way that tests tend to differ from production code is that they tend to be more repetetive. You often do the same thing multiple times with some variation in the expected inputs and outcomes. That means it's particularly important to try and separate the important information - the signal - from everything else - the noise.

Try to capture what's special or unique about each test, and make it priminent. Which inputs are relevant to the case in hand, and which are just default? Try to make that more prominent, and hide the repetitive stuff.
</class>

---

## The squint test

<aside class="notes">
Literally, squint at the screen and see what looks similar and what doesn't.

This comes back to the fact we tend to skim-read. Make the tests that do similar things look similar when you squint at them. If one test does something particularly different to all the others, it should look different.
</aside>

---

## Given/When/Then

<aside class="notes">
There are occasional exceptions, but most well-formed tests consist of these 3 phases:

1. Set up preconditions - "Given"
2. Perform an action - "When"
3. Verify expectations - "Then"

Sometimes you will also have additional set up and tear down phases, but these are often done outside the test method itself.

Particularly with longer tests, it can help to name these stages.This is useful for longer tests.

AKA Arrange/Act/Assert

Examples:
* [Before](examples/given_when_then_before.md)
* [After](examples/given_when_then_after.md)
</aside>

---

## Factory pattern

* Factory + default parameters = 🔥
* Builder pattern

<aside class="notes">

Examples:
* [Before](examples/factory_pattern_before.md)
* [After](examples/factory_pattern_after.md)
* [Default parameters](examples/factory_pattern_with_default_parameters.md)
</aside>

---

## ~~Mocks~~ Test doubles

* Dummies
* Fakes
* Stubs
* Spies
* Mocks

<aside class="notes">
https://martinfowler.com/articles/mocksArentStubs.html#TheDifferenceBetweenMocksAndStubs

We often talk about "mocking out" or "stubbing out" dependencies. There's a richer vocabulary, and if used consistently it can act as a signal boost.

Test doubles have been defined as "any kind of pretend object used in place of a real object for testing purposes".

 * Dummy objects are passed around but never actually used. Usually they are just used to fill parameter lists.
 * Fake objects actually have working implementations, but usually take some shortcut which makes them not suitable for production (an in memory database is a good example).
 * Stubs provide canned answers to calls made during the test, usually not responding at all to anything outside what's programmed in for the test.
 * Spies are stubs that also record some information based on how they were called. One form of this might be an email service that records how many messages it was sent.
 * Mocks are objects pre-programmed with expectations which form a specification of the calls they are expected to receive. You usually call a "verify" method at the end of the test, to assert that the expectations were all met.
</aside>

---

## Not in this talk

* Write your own test doubles
* Explicit dependency injection.
* Functional core, imperative shell.
* Helpers & abstractions.

<aside class="notes">
Happy to perhaps talk about these another time if there is interest.

Helpers: e.g. Page Object Pattern/Model.
</aside>

---

# Questions?
