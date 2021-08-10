---

theme: "white"

---

## Taming Android on-device testing

![Lion tamer](../taming_android_on_device_testing/img/lion_tamer.jpg)

---

## In this talk

1. Why test on devices?
2. Challenges with on-device testing
3. Some things that can help:
   1. Android Test Orchestrator
   2. Firebase test lab
   3. Fladle
   4. Scrimp
   5. Test failure tracking

---

## Why test on devices?

We can't isolate everything from the OS.

* E2E tests, integration tests, UI tests
* OS version differences
* Device/manufacturer differences

---

## Challenges

* Slow
* Flaky

---

# Android Test Orchestrator

---

## Without Android Test Orchestrator

![Android JUnitRunner processes diagram](../taming_android_on_device_testing/img/normal_junitrunner_processes.png)

---

## Android Test Orchestrator

![Android JUnit Runner docs](../taming_android_on_device_testing/img/android_junit_runner.png)

---

## Android Test Orchestrator

![Android Test Orchestrator docs](../taming_android_on_device_testing/img/android_test_orchestrator.png)

---

## Android Test Orchestrator

![Applying Android Test Orchestrator in a build.gradle file](../taming_android_on_device_testing/img/using_android_test_orchestrator.png)

---

## Android Test Orchestrator

![Android Test Orchestrator processes diagram](../taming_android_on_device_testing/img/test_orchestrator_processes.png)

---

# Firebase Test Lab

---

## Firebase Test Lab

![Firebase Test Lab console showing a test matrix](../taming_android_on_device_testing/img/firebase_test_lab.png)

---

## Firebase Test Lab

![Firebase Test Lab available devices](../taming_android_on_device_testing/img/firebase_test_lab_available_devices.png)

---

## Firebase Test Lab

![Firebase Test Lab - watching videos of failed tests](../taming_android_on_device_testing/img/firebase_test_lab_videos.png)

---

## Firebase Test Lab

![Building foundations](../taming_android_on_device_testing/img/firebase_test_lab_foundation.jpg)

---

# Fladle

---

## Fladle

![Fladle website](../taming_android_on_device_testing/img/fladle_website.png)

---

## Fladle

![Fladle is a Gradle plugin](../taming_android_on_device_testing/img/fladle_meme_1.jpg)

---

## Fladle

![Applying Fladle in a build.gradle file](../taming_android_on_device_testing/img/fladle_setup.png)

---

## Fladle

![Fladle allows per-module configuration](../taming_android_on_device_testing/img/fladle_meme_2.jpg)

---

## Fladle

![Fladle per-module configuration example](../taming_android_on_device_testing/img/fladle_per_module_configuration_example.png)

---

## Fladle

![Fladle can automatically shard tests](../taming_android_on_device_testing/img/fladle_meme_3.jpg)

---

## Fladle

![Fladle test sharding example](../taming_android_on_device_testing/img/fladle_test_sharding.png)

---

## Fladle

![Fladle - triggering tests from dev machines](../taming_android_on_device_testing/img/fladle_meme_4.jpg)

---

## Fladle

![Running Fladle from the command line](../taming_android_on_device_testing/img/fladle_run_from_command_line.png)

---

## Fladle

![Fladle command line results](../taming_android_on_device_testing/img/fladle_execution_results.png)

---

# Scrimp

---

## Scrimp

![Scrimp website](../taming_android_on_device_testing/img/scrimp_website.png)

---

## Scrimp

![Scrimp dependency graph](../taming_android_on_device_testing/img/scrimp_dependency_graph.png)

---

## Scrimp

![Applying Scrimp in a build.gradle file](../taming_android_on_device_testing/img/scrimp_gradle_usage.png)

---

## Scrimp

![Using Scrimp in a script](../taming_android_on_device_testing/img/scrimp_script_usage.png)

---

# Test failure tracking

---

## Test failure tracking

![Test failure tracking implementation](../taming_android_on_device_testing/img/test_failure_tracking_implementation.png)

---

## Test failure tracking

![Applying custom test failure tracking test runner](../taming_android_on_device_testing/img/test_failure_tracking_custom_test_runners.png)

---

## Test failure tracking

![Test failure tracking test runner lint checks](../taming_android_on_device_testing/img/test_failure_tracking_custom_test_runners.png)

---

## Test failure tracking

![Test failure tracking website](../taming_android_on_device_testing/img/test_failure_tracking_website.png)
