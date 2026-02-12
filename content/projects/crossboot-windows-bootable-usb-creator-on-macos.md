---
id: "2"
title: "CrossBoot - Windows Bootable USB Creator on macOS"
slug: "crossboot-windows-bootable-usb-creator-on-macos"
description: "Architected a macOS utility that simplifies creating Windows bootable USBs with Legacy BIOS, UEFI, and Secure Boot support, featuring automatic WIM splitting and Windows 11 bypass capabilities."
image: "/images/projects/CrossBoot.png"
date: "2026-01-20"
lastModified: "2026-02-12"
type: "Project"
---

## Overview

Developed a macOS utility to create Windows bootable USB drives directly on macOS, supporting Legacy BIOS, UEFI, and Secure Boot configurations.

## Features

- Clean and easy-to-use interface
- Automatic WIM file splitting for FAT32 compatibility (handles files over 4GB)
- Supports both Legacy BIOS and UEFI boot modes
- Secure Boot compatible
- Drag-and-drop ISO support
- Real-time progress tracking
- Option to bypass Windows 11 hardware requirements and Online Account

## Tech Stack

- **Language:** React, Electron JS
- **Platform:** macOS
- **Tools:** wimlib

[https://github.com/jschomchoey/CrossBoot](https://github.com/jschomchoey/CrossBoot)
