---
title: "The Complete Guide to Troubleshoot Windows Diagnostic Utilities in Windows 10 & 11"
date: 2025-08-10
slug: "the-complete-guide-to-troubleshoot-windows-diagnostic-utilities-in-windows-10-11-2"
categories: 
  - "system-tools"
author: "Finn"
---

Diagnostic utilities are essential tools for identifying and resolving issues with your Windows operating system. Whether you’re a beginner trying to solve a slow startup or an advanced user troubleshooting complex hardware problems, knowing how to use Windows' built-in system tools can save you time and frustration. This guide provides a step-by-step tutorial on the most effective diagnostic utilities in Windows 10 and 11, and introduces Glary Utilities as a comprehensive solution for optimization and maintenance.

What Are Windows Diagnostic Utilities?

Windows diagnostic utilities are built-in programs and features that help you analyze, detect, and resolve issues related to system performance, hardware, and software. They are designed to pinpoint problems quickly and provide solutions or recommendations for further action.

Section 1: For Beginners – Essential Diagnostic Tools and How to Use Them

1\. How to Use Windows Troubleshooters

Windows includes automated troubleshooters for common problems such as network issues, audio problems, and Windows Update failures.

Step-by-step:

1\. Open Settings (press Windows key + I). 2. Go to Update & Security (Windows 10) or System > Troubleshoot (Windows 11). 3. Click on Troubleshoot, then select Additional troubleshooters (Windows 10) or Other troubleshooters (Windows 11). 4. Choose the troubleshooter relevant to your issue, like Internet Connections or Playing Audio, and click Run.

Example: If your Wi-Fi isn’t working, select Internet Connections, and follow the on-screen prompts. The troubleshooter will scan for common problems and attempt to fix them automatically.

2\. Using Task Manager for Basic Diagnostics

Task Manager helps you monitor your system’s resource usage.

Step-by-step:

1\. Press Ctrl + Shift + Esc to open Task Manager. 2. Click on the Performance tab to see CPU, Memory, Disk, and Network usage. 3. Identify any processes causing high usage. Right-click on a process and choose End task if needed.

Example: If your PC is slow, check if a certain program is using excessive CPU or memory.

3\. Running a Quick System File Check

Corrupted system files can cause crashes or glitches.

Step-by-step:

1\. Right-click the Start button and select Windows Terminal (Admin) or Command Prompt (Admin). 2. Type sfc /scannow and press Enter. 3. Wait for the scan to complete. If issues are found, Windows will attempt to fix them.

Section 2: For Intermediate Users – Deeper Diagnostics and Maintenance

1\. Using Reliability Monitor

Reliability Monitor provides a timeline of system events and errors.

Step-by-step:

1\. Type Reliability Monitor in the Start menu search and select View reliability history. 2. Review the graph and details for critical events, warnings, and information. 3. Click on a specific date or event for more details and possible solutions.

Example: If your PC crashed, find the red X on the timeline, click it, and review the problem description for driver or application issues.

2\. Checking for Disk Errors with CHKDSK

Disk errors can lead to performance issues or data loss.

Step-by-step:

1\. Open Command Prompt as Administrator. 2. Type chkdsk C: /f and press Enter (replace C: with your drive letter if different). 3. If prompted to schedule the scan for the next restart, type Y and restart your computer.

3\. Monitoring System Health with Windows Memory Diagnostic

If you suspect faulty RAM, use this tool.

Step-by-step:

1\. Type Windows Memory Diagnostic in the Start menu and select it. 2. Choose Restart now and check for problems. 3. The tool will run after reboot and report any memory issues.

Section 3: For Advanced Users – Comprehensive System Analysis

1\. Using Performance Monitor

Performance Monitor gives detailed statistics and customizable reports.

Step-by-step:

1\. Press Windows key + R, type perfmon, and press Enter. 2. Use the default Overview or add custom counters (right-click in the window, select Add Counters, and choose metrics like Processor, Disk, or Network). 3. View real-time data or create Data Collector Sets for long-term monitoring.

Example: Set up a collector set to log CPU usage over several hours during heavy workloads.

2\. Analyzing Event Viewer Logs

Event Viewer logs every significant system event and error.

Step-by-step:

1\. Press Windows key + X and select Event Viewer. 2. Expand Windows Logs, then select System or Application. 3. Filter or search for recent errors or warnings related to your issue. 4. Double-click any entry for details and Google the event ID for troubleshooting tips.

Section 4: All Skill Levels – Enhancing Diagnostics with Glary Utilities

Why Use Glary Utilities?

While Windows offers powerful built-in tools, Glary Utilities is an all-in-one system optimization suite that simplifies diagnostics, maintenance, and repair tasks for all users. It bundles utilities like disk cleaner, registry repair, startup manager, and file recovery into a single intuitive interface.

Key features include:

\- 1-Click Maintenance: Scan and fix common system issues with one click. - Disk Cleaner: Remove junk files and free up space. - Registry Repair: Scan for and fix registry errors that could cause crashes. - Startup Manager: Identify and disable unnecessary startup programs. - System Information: Detailed reports about your hardware and software.

How to Run Diagnostics with [Glary Utilities](https://www.glarysoft.com)

Step-by-step:

1\. Download and install Glary Utilities from the official website. 2. Open the program and click on 1-Click Maintenance. 3. Review the scan results for issues in the registry, startup, shortcuts, and temporary files. 4. Click Repair Problems to resolve them automatically. 5. Explore the Advanced Tools tab for specific utilities like Disk Repair, Memory Optimizer, or Duplicate File Finder.

Practical Example: If your PC is booting slowly, use Glary Utilities’ Startup Manager to review and disable unnecessary startup items. Then, run the Registry Repair and Disk Cleaner for further optimization.

Final Thoughts

Windows diagnostic utilities are indispensable for maintaining a healthy and efficient system. Beginners can start with troubleshooters and Task Manager, while more advanced users can dive into Performance Monitor and Event Viewer. For streamlined diagnostics and optimization, [Glary Utilities](https://www.glarysoft.com) offers a user-friendly yet powerful solution suitable for all skill levels. Regularly using these tools will help you detect and resolve issues early, ensuring your Windows 10 or 11 PC runs smoothly and reliably.
