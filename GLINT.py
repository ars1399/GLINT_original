#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2024.2.4),
    on June 30, 2025, at 13:49
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER, priority)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

# Run 'Before Experiment' code from prac_code_prompt
#import pandas as pd

#object_classes = pd.read_csv("practice_object_classes.csv")
print('test')
anim_natural = ['bear', 'cat', 'hand', 'duck', 'dog']
print(anim_natural)
inanim_natural = ['apple', 'flower', 'tree', 'leaf', 'butterfy']
print(inanim_natural)
inanim_artificial = ['airplane', 'bicycle', 'chair', 'truck', 'guitar']
print(inanim_artificial)
#im_classes = anim_natural + inanim_natural + inanim_artificial 
#print(im_classes)
# Run 'Before Experiment' code from code_prompt
#import pandas as pd

#object_classes = pd.read_csv("object_classes.csv")
print('test')
anim_natural = ['bear', 'cat', 'hand', 'duck', 'dog']
print(anim_natural)
inanim_natural = ['apple', 'flower', 'tree', 'leaf', 'butterfy']
print(inanim_natural)
inanim_artificial = ['airplane', 'bicycle', 'chair', 'truck', 'guitar']
print(inanim_artificial)
#im_classes = anim_natural + inanim_natural + inanim_artificial 
#print(im_classes)
# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2024.2.4'
expName = 'GLINT'  # from the Builder filename that created this script
# information about this experiment
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_winSize = [1440, 960]
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='C:\\Users\\arsch\\MIRCset\\GLINT.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log')
    if PILOTING:
        logFile.setLevel(
            prefs.piloting['pilotLoggingLevel']
        )
    else:
        logFile.setLevel(
            logging.getLevel('info')
        )
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowGUI=False, allowStencil=False,
            monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height',
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0,0,0]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win._monitorFrameRate = win.getActualFrameRate(infoMsg='Attempting to measure frame rate of screen, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.hideMessage()
    # show a visual indicator if we're in piloting mode
    if PILOTING and prefs.piloting['showPilotingIndicator']:
        win.showPilotingIndicator()
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    ioSession = ioServer = eyetracker = None
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ptb'
        )
    if deviceManager.getDevice('key_resp_2') is None:
        # initialise key_resp_2
        key_resp_2 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_2',
        )
    if deviceManager.getDevice('key_resp_8') is None:
        # initialise key_resp_8
        key_resp_8 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_8',
        )
    if deviceManager.getDevice('prac_key_resp') is None:
        # initialise prac_key_resp
        prac_key_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='prac_key_resp',
        )
    if deviceManager.getDevice('key_resp_9') is None:
        # initialise key_resp_9
        key_resp_9 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_9',
        )
    if deviceManager.getDevice('key_resp_7') is None:
        # initialise key_resp_7
        key_resp_7 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_7',
        )
    if deviceManager.getDevice('key_resp') is None:
        # initialise key_resp
        key_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp',
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], playbackComponents=[]):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    playbackComponents : list, tuple
        List of any components with a `pause` method which need to be paused.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='PsychToolbox',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure window is set to foreground to prevent losing focus
    win.winHandle.activate()
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='PsychToolbox'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "Instructions" ---
    
    # --- Initialize components for Routine "intro_practice" ---
    intro_text = visual.TextStim(win=win, name='intro_text',
        text='In this task, you will be asked to label images. \n\nOn each trial, an image will appear, followed by 9 labels.\n\nYour job is to identify the image by pressing a number corresponding to the image label. \n\nThe images may be shown quickly. \n\n[Press the Space Bar to Continue]',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_resp_2 = keyboard.Keyboard(deviceName='key_resp_2')
    
    # --- Initialize components for Routine "intro_practice_2" ---
    text_top = visual.TextStim(win=win, name='text_top',
        text='In this example, the correct label would be cat, and so you would press the 3 key.\n\n',
        font='Arial',
        pos=(0, 0.3), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    text_bottom = visual.TextStim(win=win, name='text_bottom',
        text='Please respond as quickly, but as accurately as possible.\nPress the spacebar to do some practice trials\n',
        font='Arial',
        pos=(0, -0.4), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    image_example = visual.ImageStim(
        win=win,
        name='image_example', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.3, 0), draggable=False, size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    key_resp_8 = keyboard.Keyboard(deviceName='key_resp_8')
    image_prompt = visual.ImageStim(
        win=win,
        name='image_prompt', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0.3, 0), draggable=False, size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-4.0)
    
    # --- Initialize components for Routine "prac_fix" ---
    practice_cross = visual.TextStim(win=win, name='practice_cross',
        text='+',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.1, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "prac_stim" ---
    prac_stimuli = visual.ImageStim(
        win=win,
        name='prac_stimuli', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    
    # --- Initialize components for Routine "prac_mask" ---
    prac_image_mask = visual.ImageStim(
        win=win,
        name='prac_image_mask', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    
    # --- Initialize components for Routine "prac_prompt" ---
    prac_resp1 = visual.TextStim(win=win, name='prac_resp1',
        text='',
        font='Arial',
        pos=(-0.52, 0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    prac_label1 = visual.TextStim(win=win, name='prac_label1',
        text='',
        font='Arial',
        pos=(-0.4, 0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    prac_resp2 = visual.TextStim(win=win, name='prac_resp2',
        text='',
        font='Arial',
        pos=(-0.12, 0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    prac_label2 = visual.TextStim(win=win, name='prac_label2',
        text='',
        font='Arial',
        pos=(0.0, 0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    prac_resp3 = visual.TextStim(win=win, name='prac_resp3',
        text='',
        font='Arial',
        pos=(0.33, 0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    prac_label3 = visual.TextStim(win=win, name='prac_label3',
        text='',
        font='Arial',
        pos=(0.45, 0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    prac_resp4 = visual.TextStim(win=win, name='prac_resp4',
        text='',
        font='Arial',
        pos=(-0.52, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    prac_label4 = visual.TextStim(win=win, name='prac_label4',
        text='',
        font='Arial',
        pos=(-0.4, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    prac_resp5 = visual.TextStim(win=win, name='prac_resp5',
        text='',
        font='Arial',
        pos=(-0.12, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    prac_label5 = visual.TextStim(win=win, name='prac_label5',
        text='',
        font='Arial',
        pos=(0.0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    prac_resp6 = visual.TextStim(win=win, name='prac_resp6',
        text='',
        font='Arial',
        pos=(0.33, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-10.0);
    prac_label6 = visual.TextStim(win=win, name='prac_label6',
        text='',
        font='Arial',
        pos=(0.45, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-11.0);
    prac_resp7 = visual.TextStim(win=win, name='prac_resp7',
        text='',
        font='Arial',
        pos=(-0.52,-0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-12.0);
    prac_label7 = visual.TextStim(win=win, name='prac_label7',
        text='',
        font='Arial',
        pos=(-0.4,-0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-13.0);
    prac_resp8 = visual.TextStim(win=win, name='prac_resp8',
        text='',
        font='Arial',
        pos=(-0.12, -0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-14.0);
    prac_label8 = visual.TextStim(win=win, name='prac_label8',
        text='',
        font='Arial',
        pos=(0.0, -0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-15.0);
    prac_resp9 = visual.TextStim(win=win, name='prac_resp9',
        text='',
        font='Arial',
        pos=(0.33, -0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-16.0);
    prac_label9 = visual.TextStim(win=win, name='prac_label9',
        text='',
        font='Arial',
        pos=(0.45, -0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-17.0);
    prac_key_resp = keyboard.Keyboard(deviceName='prac_key_resp')
    
    # --- Initialize components for Routine "prac_feedback" ---
    img_feedback = visual.ImageStim(
        win=win,
        name='img_feedback', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    
    # --- Initialize components for Routine "instructions_test" ---
    text_7 = visual.TextStim(win=win, name='text_7',
        text='In this task, you will be asked to label images. \n\nOn each trial, an image will appear, followed by 9 labels. \n\nYour job is to identify the image by pressing a number corresponding to the image label. \n\nThe images may be shown quickly. \n\nPlease press the space bar to continue.',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_resp_9 = keyboard.Keyboard(deviceName='key_resp_9')
    
    # --- Initialize components for Routine "intro_experiment" ---
    text = visual.TextStim(win=win, name='text',
        text='In this example, the correct label would be apple, and so you would press the 4 key.\n',
        font='Arial',
        pos=(0, 0.3), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_resp_7 = keyboard.Keyboard(deviceName='key_resp_7')
    image_ex = visual.ImageStim(
        win=win,
        name='image_ex', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.3, -0.1), draggable=False, size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-2.0)
    image_prompt2 = visual.ImageStim(
        win=win,
        name='image_prompt2', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0.3, -0.1), draggable=False, size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-3.0)
    text_begin = visual.TextStim(win=win, name='text_begin',
        text='Press the spacebar to start the task',
        font='Arial',
        pos=(0, -0.4), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    
    # --- Initialize components for Routine "fix" ---
    cross = visual.TextStim(win=win, name='cross',
        text='',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.1, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "stim" ---
    stimuli = visual.ImageStim(
        win=win,
        name='stimuli', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    
    # --- Initialize components for Routine "mask" ---
    image_mask = visual.ImageStim(
        win=win,
        name='image_mask', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    
    # --- Initialize components for Routine "prompt" ---
    resp1 = visual.TextStim(win=win, name='resp1',
        text='',
        font='Arial',
        pos=(-0.52, 0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    label1 = visual.TextStim(win=win, name='label1',
        text='',
        font='Arial',
        pos=(-0.4, 0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    resp2 = visual.TextStim(win=win, name='resp2',
        text='',
        font='Arial',
        pos=(-0.12, 0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    label2 = visual.TextStim(win=win, name='label2',
        text='',
        font='Arial',
        pos=(0.0, 0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    resp3 = visual.TextStim(win=win, name='resp3',
        text='',
        font='Arial',
        pos=(0.33, 0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    label3 = visual.TextStim(win=win, name='label3',
        text='',
        font='Arial',
        pos=(0.45, 0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    resp4 = visual.TextStim(win=win, name='resp4',
        text='',
        font='Arial',
        pos=(-0.52, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-6.0);
    label4 = visual.TextStim(win=win, name='label4',
        text='',
        font='Arial',
        pos=(-0.4, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-7.0);
    resp5 = visual.TextStim(win=win, name='resp5',
        text='',
        font='Arial',
        pos=(-0.12, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-8.0);
    label5 = visual.TextStim(win=win, name='label5',
        text='',
        font='Arial',
        pos=(0.0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-9.0);
    resp6 = visual.TextStim(win=win, name='resp6',
        text='',
        font='Arial',
        pos=(0.33, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-10.0);
    label6 = visual.TextStim(win=win, name='label6',
        text='',
        font='Arial',
        pos=(0.45, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-11.0);
    resp7 = visual.TextStim(win=win, name='resp7',
        text='',
        font='Arial',
        pos=(-0.52,-0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-12.0);
    label7 = visual.TextStim(win=win, name='label7',
        text='',
        font='Arial',
        pos=(-0.4,-0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-13.0);
    resp8 = visual.TextStim(win=win, name='resp8',
        text='',
        font='Arial',
        pos=(-0.12, -0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-14.0);
    label8 = visual.TextStim(win=win, name='label8',
        text='',
        font='Arial',
        pos=(0.0, -0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-15.0);
    resp9 = visual.TextStim(win=win, name='resp9',
        text='',
        font='Arial',
        pos=(0.33, -0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-16.0);
    label9 = visual.TextStim(win=win, name='label9',
        text='',
        font='Arial',
        pos=(0.45, -0.35), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-17.0);
    key_resp = keyboard.Keyboard(deviceName='key_resp')
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # --- Prepare to start Routine "Instructions" ---
    # create an object to store info about Routine Instructions
    Instructions = data.Routine(
        name='Instructions',
        components=[],
    )
    Instructions.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for Instructions
    Instructions.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    Instructions.tStart = globalClock.getTime(format='float')
    Instructions.status = STARTED
    Instructions.maxDuration = None
    # keep track of which components have finished
    InstructionsComponents = Instructions.components
    for thisComponent in Instructions.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Instructions" ---
    Instructions.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            Instructions.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Instructions.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Instructions" ---
    for thisComponent in Instructions.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for Instructions
    Instructions.tStop = globalClock.getTime(format='float')
    Instructions.tStopRefresh = tThisFlipGlobal
    thisExp.nextEntry()
    # the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "intro_practice" ---
    # create an object to store info about Routine intro_practice
    intro_practice = data.Routine(
        name='intro_practice',
        components=[intro_text, key_resp_2],
    )
    intro_practice.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for key_resp_2
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    # store start times for intro_practice
    intro_practice.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    intro_practice.tStart = globalClock.getTime(format='float')
    intro_practice.status = STARTED
    intro_practice.maxDuration = None
    # keep track of which components have finished
    intro_practiceComponents = intro_practice.components
    for thisComponent in intro_practice.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "intro_practice" ---
    intro_practice.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *intro_text* updates
        
        # if intro_text is starting this frame...
        if intro_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            intro_text.frameNStart = frameN  # exact frame index
            intro_text.tStart = t  # local t and not account for scr refresh
            intro_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(intro_text, 'tStartRefresh')  # time at next scr refresh
            # update status
            intro_text.status = STARTED
            intro_text.setAutoDraw(True)
        
        # if intro_text is active this frame...
        if intro_text.status == STARTED:
            # update params
            pass
        
        # *key_resp_2* updates
        waitOnFlip = False
        
        # if key_resp_2 is starting this frame...
        if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            # update status
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                key_resp_2.duration = _key_resp_2_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            intro_practice.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in intro_practice.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "intro_practice" ---
    for thisComponent in intro_practice.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for intro_practice
    intro_practice.tStop = globalClock.getTime(format='float')
    intro_practice.tStopRefresh = tThisFlipGlobal
    thisExp.nextEntry()
    # the Routine "intro_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "intro_practice_2" ---
    # create an object to store info about Routine intro_practice_2
    intro_practice_2 = data.Routine(
        name='intro_practice_2',
        components=[text_top, text_bottom, image_example, key_resp_8, image_prompt],
    )
    intro_practice_2.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    image_example.setImage('Stim/cat/cat(1).JPEG')
    # create starting attributes for key_resp_8
    key_resp_8.keys = []
    key_resp_8.rt = []
    _key_resp_8_allKeys = []
    image_prompt.setImage('Stim/prompt.png')
    # store start times for intro_practice_2
    intro_practice_2.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    intro_practice_2.tStart = globalClock.getTime(format='float')
    intro_practice_2.status = STARTED
    intro_practice_2.maxDuration = None
    # keep track of which components have finished
    intro_practice_2Components = intro_practice_2.components
    for thisComponent in intro_practice_2.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "intro_practice_2" ---
    intro_practice_2.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_top* updates
        
        # if text_top is starting this frame...
        if text_top.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_top.frameNStart = frameN  # exact frame index
            text_top.tStart = t  # local t and not account for scr refresh
            text_top.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_top, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_top.status = STARTED
            text_top.setAutoDraw(True)
        
        # if text_top is active this frame...
        if text_top.status == STARTED:
            # update params
            pass
        
        # *text_bottom* updates
        
        # if text_bottom is starting this frame...
        if text_bottom.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_bottom.frameNStart = frameN  # exact frame index
            text_bottom.tStart = t  # local t and not account for scr refresh
            text_bottom.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_bottom, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_bottom.status = STARTED
            text_bottom.setAutoDraw(True)
        
        # if text_bottom is active this frame...
        if text_bottom.status == STARTED:
            # update params
            pass
        
        # *image_example* updates
        
        # if image_example is starting this frame...
        if image_example.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_example.frameNStart = frameN  # exact frame index
            image_example.tStart = t  # local t and not account for scr refresh
            image_example.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_example, 'tStartRefresh')  # time at next scr refresh
            # update status
            image_example.status = STARTED
            image_example.setAutoDraw(True)
        
        # if image_example is active this frame...
        if image_example.status == STARTED:
            # update params
            pass
        
        # *key_resp_8* updates
        waitOnFlip = False
        
        # if key_resp_8 is starting this frame...
        if key_resp_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_8.frameNStart = frameN  # exact frame index
            key_resp_8.tStart = t  # local t and not account for scr refresh
            key_resp_8.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_8, 'tStartRefresh')  # time at next scr refresh
            # update status
            key_resp_8.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_8.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_8.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_8.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_8.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_8_allKeys.extend(theseKeys)
            if len(_key_resp_8_allKeys):
                key_resp_8.keys = _key_resp_8_allKeys[-1].name  # just the last key pressed
                key_resp_8.rt = _key_resp_8_allKeys[-1].rt
                key_resp_8.duration = _key_resp_8_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # *image_prompt* updates
        
        # if image_prompt is starting this frame...
        if image_prompt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_prompt.frameNStart = frameN  # exact frame index
            image_prompt.tStart = t  # local t and not account for scr refresh
            image_prompt.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_prompt, 'tStartRefresh')  # time at next scr refresh
            # update status
            image_prompt.status = STARTED
            image_prompt.setAutoDraw(True)
        
        # if image_prompt is active this frame...
        if image_prompt.status == STARTED:
            # update params
            pass
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            intro_practice_2.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in intro_practice_2.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "intro_practice_2" ---
    for thisComponent in intro_practice_2.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for intro_practice_2
    intro_practice_2.tStop = globalClock.getTime(format='float')
    intro_practice_2.tStopRefresh = tThisFlipGlobal
    thisExp.nextEntry()
    # the Routine "intro_practice_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    prac_loop = data.TrialHandler2(
        name='prac_loop',
        nReps=1.0, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('practice_object_classes.csv'), 
        seed=None, 
    )
    thisExp.addLoop(prac_loop)  # add the loop to the experiment
    thisPrac_loop = prac_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisPrac_loop.rgb)
    if thisPrac_loop != None:
        for paramName in thisPrac_loop:
            globals()[paramName] = thisPrac_loop[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisPrac_loop in prac_loop:
        currentLoop = prac_loop
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisPrac_loop.rgb)
        if thisPrac_loop != None:
            for paramName in thisPrac_loop:
                globals()[paramName] = thisPrac_loop[paramName]
        
        # --- Prepare to start Routine "prac_fix" ---
        # create an object to store info about Routine prac_fix
        prac_fix = data.Routine(
            name='prac_fix',
            components=[practice_cross],
        )
        prac_fix.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from prac_code_prompt
        int_rand = randint(1,25) # random number is generated to be used to pick image number from image class folders
        
        distract_anim_nat = anim_natural
        shuffle(distract_anim_nat)
        
        distract_inanim_nat = inanim_natural
        shuffle(distract_inanim_nat)
        
        distract_inanim_art = inanim_artificial
        shuffle(distract_inanim_art)
        
        
        '''
        if object_category == 'anim_natural':
            distract_anim_nat.remove(object_class)
            distract_anim_nat = distract_anim_nat[0:2] + [object_class]
        elif object_category =='inanim_natural':
            distract_inanim_nat.remove(object_class)
            distract_inanim_nat = distract_inanim_nat[0:2] + [object_class]
        elif object_category == 'inanim_artificial':
            distract_inanim_art.remove(object_class)
            distract_inanim_art = distract_inanim_art[0:2] + [object_class]
        '''
        final_distract = []
        im_n = 0
            
        if object_category == 'anim_natural':
            for obj_n in range(0,len(distract_anim_nat)):
                if distract_anim_nat[obj_n] != object_class:
                    print(distract_anim_nat[obj_n])
                    final_distract = final_distract + [distract_anim_nat[obj_n]]
                    im_n = im_n + 1
        
                    print(im_n)
        
                    if im_n ==2:
                        break
        
            distract_anim_nat = final_distract +  [object_class]
        elif object_category =='inanim_natural':
            for obj_n in range(0,len(distract_inanim_nat)):
                if distract_inanim_nat[obj_n] != object_class:
                    final_distract = final_distract + [distract_inanim_nat[obj_n]]
                    im_n = im_n + 1
        
                    if im_n ==2:
                        break
        
            distract_inanim_nat = final_distract +  [object_class]
        
        elif object_category == 'inanim_artificial':
            for obj_n in range(0,len(distract_inanim_art)):
                if distract_inanim_art[obj_n] != object_class:
                    final_distract = final_distract + [distract_inanim_art[obj_n]]
                    im_n = im_n + 1
        
                    if im_n ==2:
                        break
        
            distract_inanim_art = final_distract +  [object_class]
        
        
        print(distract_anim_nat)
        print(distract_inanim_nat)
        print(distract_inanim_art)
        prompts = distract_anim_nat[0:3] + distract_inanim_nat[0:3] + distract_inanim_art[0:3]
        #prompts = [distract_anim_nat[0]] + [distract_anim_nat[1]] + [distract_anim_nat[2]] + [distract_inanim_nat[0]] + [distract_inanim_nat[1]] + [distract_inanim_nat[2]] + [distract_inanim_art[0]] + [distract_inanim_art[1]] + [distract_inanim_art[2]]
        
        img_file = f'Stim/{object_class}/{object_class}({int_rand}).JPEG' 
        print(img_file)
        shuffle(prompts)
        print(prompts)
        
        prompt1 = prompts[0]
        prompt2 = prompts[1]
        prompt3 = prompts[2]
        prompt4 = prompts[3]
        prompt5 = prompts[4]
        prompt6 = prompts[5]
        prompt7 = prompts[6]
        prompt8 = prompts[7]
        prompt9 = prompts[8]
        
        thisExp.addData('prompt_1', prompts[0])
        thisExp.addData('prompt_2', prompts[1])
        thisExp.addData('prompt_3', prompts[2])
        thisExp.addData('prompt_4', prompts[3])
        thisExp.addData('prompt_5', prompts[4])
        thisExp.addData('prompt_6', prompts[5])
        thisExp.addData('prompt_7', prompts[6])
        thisExp.addData('prompt_8', prompts[7])
        thisExp.addData('prompt_9', prompts[8])
        # Run 'Begin Routine' code from prac_code_correct
        corr_label = object_class
        
        if prompt1 == corr_label:
            corr_response = "1"
        
        if prompt2 == corr_label:
            corr_response = "2"
            
        if prompt3 == corr_label:
            corr_response = "3"
            
        if prompt4 == corr_label: 
            corr_response = "4"
        
        if prompt5 == corr_label:
            corr_response = "5"
            
        if prompt6 == corr_label:
            corr_response = "6"
        
        if prompt7 == corr_label:
            corr_response = "7"
        
        if prompt8 == corr_label:
            corr_response = "8"
        
        if prompt9 == corr_label: 
            corr_response = "9"
                
            
        thisExp.addData('CorrectResponse', corr_response)
        print(corr_response)
        # Run 'Begin Routine' code from prac_code_prompt_data
        #Add prompts for each trial into data sheet
        thisExp.addData('prac_prompt_1', prompts[0])
        thisExp.addData('prac_prompt_2', prompts[1])
        thisExp.addData('prac_prompt_3', prompts[2])
        thisExp.addData('prac_prompt_4', prompts[3])
        thisExp.addData('prac_prompt_5', prompts[4])
        thisExp.addData('prac_prompt_6', prompts[5])
        thisExp.addData('prac_prompt_7', prompts[6])
        thisExp.addData('prac_prompt_8', prompts[7])
        thisExp.addData('prac_prompt_9', prompts[8])
        
        # store start times for prac_fix
        prac_fix.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        prac_fix.tStart = globalClock.getTime(format='float')
        prac_fix.status = STARTED
        prac_fix.maxDuration = None
        # keep track of which components have finished
        prac_fixComponents = prac_fix.components
        for thisComponent in prac_fix.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "prac_fix" ---
        # if trial has changed, end Routine now
        if isinstance(prac_loop, data.TrialHandler2) and thisPrac_loop.thisN != prac_loop.thisTrial.thisN:
            continueRoutine = False
        prac_fix.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 1.0:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *practice_cross* updates
            
            # if practice_cross is starting this frame...
            if practice_cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                practice_cross.frameNStart = frameN  # exact frame index
                practice_cross.tStart = t  # local t and not account for scr refresh
                practice_cross.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(practice_cross, 'tStartRefresh')  # time at next scr refresh
                # update status
                practice_cross.status = STARTED
                practice_cross.setAutoDraw(True)
            
            # if practice_cross is active this frame...
            if practice_cross.status == STARTED:
                # update params
                pass
            
            # if practice_cross is stopping this frame...
            if practice_cross.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > practice_cross.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    practice_cross.tStop = t  # not accounting for scr refresh
                    practice_cross.tStopRefresh = tThisFlipGlobal  # on global time
                    practice_cross.frameNStop = frameN  # exact frame index
                    # update status
                    practice_cross.status = FINISHED
                    practice_cross.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                prac_fix.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in prac_fix.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "prac_fix" ---
        for thisComponent in prac_fix.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for prac_fix
        prac_fix.tStop = globalClock.getTime(format='float')
        prac_fix.tStopRefresh = tThisFlipGlobal
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if prac_fix.maxDurationReached:
            routineTimer.addTime(-prac_fix.maxDuration)
        elif prac_fix.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-1.000000)
        
        # --- Prepare to start Routine "prac_stim" ---
        # create an object to store info about Routine prac_stim
        prac_stim = data.Routine(
            name='prac_stim',
            components=[prac_stimuli],
        )
        prac_stim.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        prac_stimuli.setImage(img_file)
        # store start times for prac_stim
        prac_stim.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        prac_stim.tStart = globalClock.getTime(format='float')
        prac_stim.status = STARTED
        prac_stim.maxDuration = None
        # keep track of which components have finished
        prac_stimComponents = prac_stim.components
        for thisComponent in prac_stim.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "prac_stim" ---
        # if trial has changed, end Routine now
        if isinstance(prac_loop, data.TrialHandler2) and thisPrac_loop.thisN != prac_loop.thisTrial.thisN:
            continueRoutine = False
        prac_stim.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 1.0:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *prac_stimuli* updates
            
            # if prac_stimuli is starting this frame...
            if prac_stimuli.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_stimuli.frameNStart = frameN  # exact frame index
                prac_stimuli.tStart = t  # local t and not account for scr refresh
                prac_stimuli.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_stimuli, 'tStartRefresh')  # time at next scr refresh
                # update status
                prac_stimuli.status = STARTED
                prac_stimuli.setAutoDraw(True)
            
            # if prac_stimuli is active this frame...
            if prac_stimuli.status == STARTED:
                # update params
                pass
            
            # if prac_stimuli is stopping this frame...
            if prac_stimuli.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > prac_stimuli.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    prac_stimuli.tStop = t  # not accounting for scr refresh
                    prac_stimuli.tStopRefresh = tThisFlipGlobal  # on global time
                    prac_stimuli.frameNStop = frameN  # exact frame index
                    # update status
                    prac_stimuli.status = FINISHED
                    prac_stimuli.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                prac_stim.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in prac_stim.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "prac_stim" ---
        for thisComponent in prac_stim.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for prac_stim
        prac_stim.tStop = globalClock.getTime(format='float')
        prac_stim.tStopRefresh = tThisFlipGlobal
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if prac_stim.maxDurationReached:
            routineTimer.addTime(-prac_stim.maxDuration)
        elif prac_stim.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-1.000000)
        
        # --- Prepare to start Routine "prac_mask" ---
        # create an object to store info about Routine prac_mask
        prac_mask = data.Routine(
            name='prac_mask',
            components=[prac_image_mask],
        )
        prac_mask.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        prac_image_mask.setImage('Stim/rgb_mask.jpg')
        # store start times for prac_mask
        prac_mask.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        prac_mask.tStart = globalClock.getTime(format='float')
        prac_mask.status = STARTED
        prac_mask.maxDuration = None
        # keep track of which components have finished
        prac_maskComponents = prac_mask.components
        for thisComponent in prac_mask.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "prac_mask" ---
        # if trial has changed, end Routine now
        if isinstance(prac_loop, data.TrialHandler2) and thisPrac_loop.thisN != prac_loop.thisTrial.thisN:
            continueRoutine = False
        prac_mask.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 0.15:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *prac_image_mask* updates
            
            # if prac_image_mask is starting this frame...
            if prac_image_mask.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_image_mask.frameNStart = frameN  # exact frame index
                prac_image_mask.tStart = t  # local t and not account for scr refresh
                prac_image_mask.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_image_mask, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'prac_image_mask.started')
                # update status
                prac_image_mask.status = STARTED
                prac_image_mask.setAutoDraw(True)
            
            # if prac_image_mask is active this frame...
            if prac_image_mask.status == STARTED:
                # update params
                pass
            
            # if prac_image_mask is stopping this frame...
            if prac_image_mask.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > prac_image_mask.tStartRefresh + 0.150-frameTolerance:
                    # keep track of stop time/frame for later
                    prac_image_mask.tStop = t  # not accounting for scr refresh
                    prac_image_mask.tStopRefresh = tThisFlipGlobal  # on global time
                    prac_image_mask.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'prac_image_mask.stopped')
                    # update status
                    prac_image_mask.status = FINISHED
                    prac_image_mask.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                prac_mask.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in prac_mask.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "prac_mask" ---
        for thisComponent in prac_mask.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for prac_mask
        prac_mask.tStop = globalClock.getTime(format='float')
        prac_mask.tStopRefresh = tThisFlipGlobal
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if prac_mask.maxDurationReached:
            routineTimer.addTime(-prac_mask.maxDuration)
        elif prac_mask.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.150000)
        
        # --- Prepare to start Routine "prac_prompt" ---
        # create an object to store info about Routine prac_prompt
        prac_prompt = data.Routine(
            name='prac_prompt',
            components=[prac_resp1, prac_label1, prac_resp2, prac_label2, prac_resp3, prac_label3, prac_resp4, prac_label4, prac_resp5, prac_label5, prac_resp6, prac_label6, prac_resp7, prac_label7, prac_resp8, prac_label8, prac_resp9, prac_label9, prac_key_resp],
        )
        prac_prompt.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        prac_resp1.setText('(1)')
        prac_label1.setText(prompt1)
        prac_resp2.setText('(2)')
        prac_label2.setText(prompt2)
        prac_resp3.setText('(3)')
        prac_label3.setText(prompt3)
        prac_resp4.setText('(4)')
        prac_label4.setText(prompt4)
        prac_resp5.setText('(5)')
        prac_label5.setText(prompt5)
        prac_resp6.setText('(6)')
        prac_label6.setText(prompt6)
        prac_resp7.setText('(7)')
        prac_label7.setText(prompt7)
        prac_resp8.setText('(8)')
        prac_label8.setText(prompt8)
        prac_resp9.setText('(9)')
        prac_label9.setText(prompt9)
        # create starting attributes for prac_key_resp
        prac_key_resp.keys = []
        prac_key_resp.rt = []
        _prac_key_resp_allKeys = []
        # store start times for prac_prompt
        prac_prompt.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        prac_prompt.tStart = globalClock.getTime(format='float')
        prac_prompt.status = STARTED
        prac_prompt.maxDuration = None
        # keep track of which components have finished
        prac_promptComponents = prac_prompt.components
        for thisComponent in prac_prompt.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "prac_prompt" ---
        # if trial has changed, end Routine now
        if isinstance(prac_loop, data.TrialHandler2) and thisPrac_loop.thisN != prac_loop.thisTrial.thisN:
            continueRoutine = False
        prac_prompt.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *prac_resp1* updates
            
            # if prac_resp1 is starting this frame...
            if prac_resp1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_resp1.frameNStart = frameN  # exact frame index
                prac_resp1.tStart = t  # local t and not account for scr refresh
                prac_resp1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_resp1, 'tStartRefresh')  # time at next scr refresh
                # update status
                prac_resp1.status = STARTED
                prac_resp1.setAutoDraw(True)
            
            # if prac_resp1 is active this frame...
            if prac_resp1.status == STARTED:
                # update params
                pass
            
            # *prac_label1* updates
            
            # if prac_label1 is starting this frame...
            if prac_label1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_label1.frameNStart = frameN  # exact frame index
                prac_label1.tStart = t  # local t and not account for scr refresh
                prac_label1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_label1, 'tStartRefresh')  # time at next scr refresh
                # update status
                prac_label1.status = STARTED
                prac_label1.setAutoDraw(True)
            
            # if prac_label1 is active this frame...
            if prac_label1.status == STARTED:
                # update params
                pass
            
            # *prac_resp2* updates
            
            # if prac_resp2 is starting this frame...
            if prac_resp2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_resp2.frameNStart = frameN  # exact frame index
                prac_resp2.tStart = t  # local t and not account for scr refresh
                prac_resp2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_resp2, 'tStartRefresh')  # time at next scr refresh
                # update status
                prac_resp2.status = STARTED
                prac_resp2.setAutoDraw(True)
            
            # if prac_resp2 is active this frame...
            if prac_resp2.status == STARTED:
                # update params
                pass
            
            # *prac_label2* updates
            
            # if prac_label2 is starting this frame...
            if prac_label2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_label2.frameNStart = frameN  # exact frame index
                prac_label2.tStart = t  # local t and not account for scr refresh
                prac_label2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_label2, 'tStartRefresh')  # time at next scr refresh
                # update status
                prac_label2.status = STARTED
                prac_label2.setAutoDraw(True)
            
            # if prac_label2 is active this frame...
            if prac_label2.status == STARTED:
                # update params
                pass
            
            # *prac_resp3* updates
            
            # if prac_resp3 is starting this frame...
            if prac_resp3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_resp3.frameNStart = frameN  # exact frame index
                prac_resp3.tStart = t  # local t and not account for scr refresh
                prac_resp3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_resp3, 'tStartRefresh')  # time at next scr refresh
                # update status
                prac_resp3.status = STARTED
                prac_resp3.setAutoDraw(True)
            
            # if prac_resp3 is active this frame...
            if prac_resp3.status == STARTED:
                # update params
                pass
            
            # *prac_label3* updates
            
            # if prac_label3 is starting this frame...
            if prac_label3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_label3.frameNStart = frameN  # exact frame index
                prac_label3.tStart = t  # local t and not account for scr refresh
                prac_label3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_label3, 'tStartRefresh')  # time at next scr refresh
                # update status
                prac_label3.status = STARTED
                prac_label3.setAutoDraw(True)
            
            # if prac_label3 is active this frame...
            if prac_label3.status == STARTED:
                # update params
                pass
            
            # *prac_resp4* updates
            
            # if prac_resp4 is starting this frame...
            if prac_resp4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_resp4.frameNStart = frameN  # exact frame index
                prac_resp4.tStart = t  # local t and not account for scr refresh
                prac_resp4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_resp4, 'tStartRefresh')  # time at next scr refresh
                # update status
                prac_resp4.status = STARTED
                prac_resp4.setAutoDraw(True)
            
            # if prac_resp4 is active this frame...
            if prac_resp4.status == STARTED:
                # update params
                pass
            
            # *prac_label4* updates
            
            # if prac_label4 is starting this frame...
            if prac_label4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_label4.frameNStart = frameN  # exact frame index
                prac_label4.tStart = t  # local t and not account for scr refresh
                prac_label4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_label4, 'tStartRefresh')  # time at next scr refresh
                # update status
                prac_label4.status = STARTED
                prac_label4.setAutoDraw(True)
            
            # if prac_label4 is active this frame...
            if prac_label4.status == STARTED:
                # update params
                pass
            
            # *prac_resp5* updates
            
            # if prac_resp5 is starting this frame...
            if prac_resp5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_resp5.frameNStart = frameN  # exact frame index
                prac_resp5.tStart = t  # local t and not account for scr refresh
                prac_resp5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_resp5, 'tStartRefresh')  # time at next scr refresh
                # update status
                prac_resp5.status = STARTED
                prac_resp5.setAutoDraw(True)
            
            # if prac_resp5 is active this frame...
            if prac_resp5.status == STARTED:
                # update params
                pass
            
            # *prac_label5* updates
            
            # if prac_label5 is starting this frame...
            if prac_label5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_label5.frameNStart = frameN  # exact frame index
                prac_label5.tStart = t  # local t and not account for scr refresh
                prac_label5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_label5, 'tStartRefresh')  # time at next scr refresh
                # update status
                prac_label5.status = STARTED
                prac_label5.setAutoDraw(True)
            
            # if prac_label5 is active this frame...
            if prac_label5.status == STARTED:
                # update params
                pass
            
            # *prac_resp6* updates
            
            # if prac_resp6 is starting this frame...
            if prac_resp6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_resp6.frameNStart = frameN  # exact frame index
                prac_resp6.tStart = t  # local t and not account for scr refresh
                prac_resp6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_resp6, 'tStartRefresh')  # time at next scr refresh
                # update status
                prac_resp6.status = STARTED
                prac_resp6.setAutoDraw(True)
            
            # if prac_resp6 is active this frame...
            if prac_resp6.status == STARTED:
                # update params
                pass
            
            # *prac_label6* updates
            
            # if prac_label6 is starting this frame...
            if prac_label6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_label6.frameNStart = frameN  # exact frame index
                prac_label6.tStart = t  # local t and not account for scr refresh
                prac_label6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_label6, 'tStartRefresh')  # time at next scr refresh
                # update status
                prac_label6.status = STARTED
                prac_label6.setAutoDraw(True)
            
            # if prac_label6 is active this frame...
            if prac_label6.status == STARTED:
                # update params
                pass
            
            # *prac_resp7* updates
            
            # if prac_resp7 is starting this frame...
            if prac_resp7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_resp7.frameNStart = frameN  # exact frame index
                prac_resp7.tStart = t  # local t and not account for scr refresh
                prac_resp7.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_resp7, 'tStartRefresh')  # time at next scr refresh
                # update status
                prac_resp7.status = STARTED
                prac_resp7.setAutoDraw(True)
            
            # if prac_resp7 is active this frame...
            if prac_resp7.status == STARTED:
                # update params
                pass
            
            # *prac_label7* updates
            
            # if prac_label7 is starting this frame...
            if prac_label7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_label7.frameNStart = frameN  # exact frame index
                prac_label7.tStart = t  # local t and not account for scr refresh
                prac_label7.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_label7, 'tStartRefresh')  # time at next scr refresh
                # update status
                prac_label7.status = STARTED
                prac_label7.setAutoDraw(True)
            
            # if prac_label7 is active this frame...
            if prac_label7.status == STARTED:
                # update params
                pass
            
            # *prac_resp8* updates
            
            # if prac_resp8 is starting this frame...
            if prac_resp8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_resp8.frameNStart = frameN  # exact frame index
                prac_resp8.tStart = t  # local t and not account for scr refresh
                prac_resp8.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_resp8, 'tStartRefresh')  # time at next scr refresh
                # update status
                prac_resp8.status = STARTED
                prac_resp8.setAutoDraw(True)
            
            # if prac_resp8 is active this frame...
            if prac_resp8.status == STARTED:
                # update params
                pass
            
            # *prac_label8* updates
            
            # if prac_label8 is starting this frame...
            if prac_label8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_label8.frameNStart = frameN  # exact frame index
                prac_label8.tStart = t  # local t and not account for scr refresh
                prac_label8.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_label8, 'tStartRefresh')  # time at next scr refresh
                # update status
                prac_label8.status = STARTED
                prac_label8.setAutoDraw(True)
            
            # if prac_label8 is active this frame...
            if prac_label8.status == STARTED:
                # update params
                pass
            
            # *prac_resp9* updates
            
            # if prac_resp9 is starting this frame...
            if prac_resp9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_resp9.frameNStart = frameN  # exact frame index
                prac_resp9.tStart = t  # local t and not account for scr refresh
                prac_resp9.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_resp9, 'tStartRefresh')  # time at next scr refresh
                # update status
                prac_resp9.status = STARTED
                prac_resp9.setAutoDraw(True)
            
            # if prac_resp9 is active this frame...
            if prac_resp9.status == STARTED:
                # update params
                pass
            
            # *prac_label9* updates
            
            # if prac_label9 is starting this frame...
            if prac_label9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_label9.frameNStart = frameN  # exact frame index
                prac_label9.tStart = t  # local t and not account for scr refresh
                prac_label9.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_label9, 'tStartRefresh')  # time at next scr refresh
                # update status
                prac_label9.status = STARTED
                prac_label9.setAutoDraw(True)
            
            # if prac_label9 is active this frame...
            if prac_label9.status == STARTED:
                # update params
                pass
            
            # *prac_key_resp* updates
            waitOnFlip = False
            
            # if prac_key_resp is starting this frame...
            if prac_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                prac_key_resp.frameNStart = frameN  # exact frame index
                prac_key_resp.tStart = t  # local t and not account for scr refresh
                prac_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(prac_key_resp, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'prac_key_resp.started')
                # update status
                prac_key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(prac_key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(prac_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if prac_key_resp.status == STARTED and not waitOnFlip:
                theseKeys = prac_key_resp.getKeys(keyList=['1','2','3','4','5','6','7','8','9'], ignoreKeys=["escape"], waitRelease=False)
                _prac_key_resp_allKeys.extend(theseKeys)
                if len(_prac_key_resp_allKeys):
                    prac_key_resp.keys = _prac_key_resp_allKeys[-1].name  # just the last key pressed
                    prac_key_resp.rt = _prac_key_resp_allKeys[-1].rt
                    prac_key_resp.duration = _prac_key_resp_allKeys[-1].duration
                    # was this correct?
                    if (prac_key_resp.keys == str(corr_response)) or (prac_key_resp.keys == corr_response):
                        prac_key_resp.corr = 1
                    else:
                        prac_key_resp.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                prac_prompt.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in prac_prompt.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "prac_prompt" ---
        for thisComponent in prac_prompt.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for prac_prompt
        prac_prompt.tStop = globalClock.getTime(format='float')
        prac_prompt.tStopRefresh = tThisFlipGlobal
        # check responses
        if prac_key_resp.keys in ['', [], None]:  # No response was made
            prac_key_resp.keys = None
            # was no response the correct answer?!
            if str(corr_response).lower() == 'none':
               prac_key_resp.corr = 1;  # correct non-response
            else:
               prac_key_resp.corr = 0;  # failed to respond (incorrectly)
        # store data for prac_loop (TrialHandler)
        prac_loop.addData('prac_key_resp.keys',prac_key_resp.keys)
        prac_loop.addData('prac_key_resp.corr', prac_key_resp.corr)
        if prac_key_resp.keys != None:  # we had a response
            prac_loop.addData('prac_key_resp.rt', prac_key_resp.rt)
            prac_loop.addData('prac_key_resp.duration', prac_key_resp.duration)
        # the Routine "prac_prompt" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "prac_feedback" ---
        # create an object to store info about Routine prac_feedback
        prac_feedback = data.Routine(
            name='prac_feedback',
            components=[img_feedback],
        )
        prac_feedback.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code
        feed_img =''
        if prac_key_resp.keys == corr_response:
            feed_img = 'Stim/check_mark.png'
            
        elif prac_key_resp.keys != corr_response:
            feed_img = 'Stim/wrong.png'
        
        img_feedback.setImage(feed_img)
        # store start times for prac_feedback
        prac_feedback.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        prac_feedback.tStart = globalClock.getTime(format='float')
        prac_feedback.status = STARTED
        prac_feedback.maxDuration = None
        # keep track of which components have finished
        prac_feedbackComponents = prac_feedback.components
        for thisComponent in prac_feedback.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "prac_feedback" ---
        # if trial has changed, end Routine now
        if isinstance(prac_loop, data.TrialHandler2) and thisPrac_loop.thisN != prac_loop.thisTrial.thisN:
            continueRoutine = False
        prac_feedback.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 1.0:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *img_feedback* updates
            
            # if img_feedback is starting this frame...
            if img_feedback.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                img_feedback.frameNStart = frameN  # exact frame index
                img_feedback.tStart = t  # local t and not account for scr refresh
                img_feedback.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(img_feedback, 'tStartRefresh')  # time at next scr refresh
                # update status
                img_feedback.status = STARTED
                img_feedback.setAutoDraw(True)
            
            # if img_feedback is active this frame...
            if img_feedback.status == STARTED:
                # update params
                pass
            
            # if img_feedback is stopping this frame...
            if img_feedback.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > img_feedback.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    img_feedback.tStop = t  # not accounting for scr refresh
                    img_feedback.tStopRefresh = tThisFlipGlobal  # on global time
                    img_feedback.frameNStop = frameN  # exact frame index
                    # update status
                    img_feedback.status = FINISHED
                    img_feedback.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                prac_feedback.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in prac_feedback.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "prac_feedback" ---
        for thisComponent in prac_feedback.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for prac_feedback
        prac_feedback.tStop = globalClock.getTime(format='float')
        prac_feedback.tStopRefresh = tThisFlipGlobal
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if prac_feedback.maxDurationReached:
            routineTimer.addTime(-prac_feedback.maxDuration)
        elif prac_feedback.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-1.000000)
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'prac_loop'
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "instructions_test" ---
    # create an object to store info about Routine instructions_test
    instructions_test = data.Routine(
        name='instructions_test',
        components=[text_7, key_resp_9],
    )
    instructions_test.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for key_resp_9
    key_resp_9.keys = []
    key_resp_9.rt = []
    _key_resp_9_allKeys = []
    # store start times for instructions_test
    instructions_test.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    instructions_test.tStart = globalClock.getTime(format='float')
    instructions_test.status = STARTED
    instructions_test.maxDuration = None
    # keep track of which components have finished
    instructions_testComponents = instructions_test.components
    for thisComponent in instructions_test.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "instructions_test" ---
    instructions_test.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_7* updates
        
        # if text_7 is starting this frame...
        if text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_7.frameNStart = frameN  # exact frame index
            text_7.tStart = t  # local t and not account for scr refresh
            text_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_7.status = STARTED
            text_7.setAutoDraw(True)
        
        # if text_7 is active this frame...
        if text_7.status == STARTED:
            # update params
            pass
        
        # *key_resp_9* updates
        waitOnFlip = False
        
        # if key_resp_9 is starting this frame...
        if key_resp_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_9.frameNStart = frameN  # exact frame index
            key_resp_9.tStart = t  # local t and not account for scr refresh
            key_resp_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_9, 'tStartRefresh')  # time at next scr refresh
            # update status
            key_resp_9.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_9.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_9.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_9.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_9.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_9_allKeys.extend(theseKeys)
            if len(_key_resp_9_allKeys):
                key_resp_9.keys = _key_resp_9_allKeys[-1].name  # just the last key pressed
                key_resp_9.rt = _key_resp_9_allKeys[-1].rt
                key_resp_9.duration = _key_resp_9_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            instructions_test.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instructions_test.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instructions_test" ---
    for thisComponent in instructions_test.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for instructions_test
    instructions_test.tStop = globalClock.getTime(format='float')
    instructions_test.tStopRefresh = tThisFlipGlobal
    thisExp.nextEntry()
    # the Routine "instructions_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "intro_experiment" ---
    # create an object to store info about Routine intro_experiment
    intro_experiment = data.Routine(
        name='intro_experiment',
        components=[text, key_resp_7, image_ex, image_prompt2, text_begin],
    )
    intro_experiment.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for key_resp_7
    key_resp_7.keys = []
    key_resp_7.rt = []
    _key_resp_7_allKeys = []
    image_ex.setImage('Stim/apple/apple(15).JPEG')
    image_prompt2.setImage('Stim/prompt.png')
    # store start times for intro_experiment
    intro_experiment.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    intro_experiment.tStart = globalClock.getTime(format='float')
    intro_experiment.status = STARTED
    thisExp.addData('intro_experiment.started', intro_experiment.tStart)
    intro_experiment.maxDuration = None
    # keep track of which components have finished
    intro_experimentComponents = intro_experiment.components
    for thisComponent in intro_experiment.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "intro_experiment" ---
    intro_experiment.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        
        # if text is starting this frame...
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            # update status
            text.status = STARTED
            text.setAutoDraw(True)
        
        # if text is active this frame...
        if text.status == STARTED:
            # update params
            pass
        
        # *key_resp_7* updates
        waitOnFlip = False
        
        # if key_resp_7 is starting this frame...
        if key_resp_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_7.frameNStart = frameN  # exact frame index
            key_resp_7.tStart = t  # local t and not account for scr refresh
            key_resp_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_7, 'tStartRefresh')  # time at next scr refresh
            # update status
            key_resp_7.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_7.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_7.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_7.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_7.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_7_allKeys.extend(theseKeys)
            if len(_key_resp_7_allKeys):
                key_resp_7.keys = _key_resp_7_allKeys[-1].name  # just the last key pressed
                key_resp_7.rt = _key_resp_7_allKeys[-1].rt
                key_resp_7.duration = _key_resp_7_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # *image_ex* updates
        
        # if image_ex is starting this frame...
        if image_ex.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_ex.frameNStart = frameN  # exact frame index
            image_ex.tStart = t  # local t and not account for scr refresh
            image_ex.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_ex, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_ex.started')
            # update status
            image_ex.status = STARTED
            image_ex.setAutoDraw(True)
        
        # if image_ex is active this frame...
        if image_ex.status == STARTED:
            # update params
            pass
        
        # *image_prompt2* updates
        
        # if image_prompt2 is starting this frame...
        if image_prompt2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_prompt2.frameNStart = frameN  # exact frame index
            image_prompt2.tStart = t  # local t and not account for scr refresh
            image_prompt2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_prompt2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'image_prompt2.started')
            # update status
            image_prompt2.status = STARTED
            image_prompt2.setAutoDraw(True)
        
        # if image_prompt2 is active this frame...
        if image_prompt2.status == STARTED:
            # update params
            pass
        
        # *text_begin* updates
        
        # if text_begin is starting this frame...
        if text_begin.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_begin.frameNStart = frameN  # exact frame index
            text_begin.tStart = t  # local t and not account for scr refresh
            text_begin.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_begin, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_begin.started')
            # update status
            text_begin.status = STARTED
            text_begin.setAutoDraw(True)
        
        # if text_begin is active this frame...
        if text_begin.status == STARTED:
            # update params
            pass
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            intro_experiment.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in intro_experiment.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "intro_experiment" ---
    for thisComponent in intro_experiment.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for intro_experiment
    intro_experiment.tStop = globalClock.getTime(format='float')
    intro_experiment.tStopRefresh = tThisFlipGlobal
    thisExp.addData('intro_experiment.stopped', intro_experiment.tStop)
    thisExp.nextEntry()
    # the Routine "intro_experiment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    loop = data.TrialHandler2(
        name='loop',
        nReps=4.0, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('object_classes.csv'), 
        seed=None, 
    )
    thisExp.addLoop(loop)  # add the loop to the experiment
    thisLoop = loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisLoop.rgb)
    if thisLoop != None:
        for paramName in thisLoop:
            globals()[paramName] = thisLoop[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisLoop in loop:
        currentLoop = loop
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisLoop.rgb)
        if thisLoop != None:
            for paramName in thisLoop:
                globals()[paramName] = thisLoop[paramName]
        
        # --- Prepare to start Routine "fix" ---
        # create an object to store info about Routine fix
        fix = data.Routine(
            name='fix',
            components=[cross],
        )
        fix.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        cross.setText('+')
        # Run 'Begin Routine' code from code_prompt
        int_rand = randint(1,25) # random number is generated to be used to pick image number from image class folders
        
        distract_anim_nat = anim_natural
        shuffle(distract_anim_nat)
        
        distract_inanim_nat = inanim_natural
        shuffle(distract_inanim_nat)
        
        distract_inanim_art = inanim_artificial
        shuffle(distract_inanim_art)
        
        
        '''
        if object_category == 'anim_natural':
            distract_anim_nat.remove(object_class)
            distract_anim_nat = distract_anim_nat[0:2] + [object_class]
        elif object_category =='inanim_natural':
            distract_inanim_nat.remove(object_class)
            distract_inanim_nat = distract_inanim_nat[0:2] + [object_class]
        elif object_category == 'inanim_artificial':
            distract_inanim_art.remove(object_class)
            distract_inanim_art = distract_inanim_art[0:2] + [object_class]
        '''
        final_distract = []
        im_n = 0
            
        if object_category == 'anim_natural':
            for obj_n in range(0,len(distract_anim_nat)):
                if distract_anim_nat[obj_n] != object_class:
                    print(distract_anim_nat[obj_n])
                    final_distract = final_distract + [distract_anim_nat[obj_n]]
                    im_n = im_n + 1
        
                    print(im_n)
        
                    if im_n ==2:
                        break
        
            distract_anim_nat = final_distract +  [object_class]
        elif object_category =='inanim_natural':
            for obj_n in range(0,len(distract_inanim_nat)):
                if distract_inanim_nat[obj_n] != object_class:
                    final_distract = final_distract + [distract_inanim_nat[obj_n]]
                    im_n = im_n + 1
        
                    if im_n ==2:
                        break
        
            distract_inanim_nat = final_distract +  [object_class]
        
        elif object_category == 'inanim_artificial':
            for obj_n in range(0,len(distract_inanim_art)):
                if distract_inanim_art[obj_n] != object_class:
                    final_distract = final_distract + [distract_inanim_art[obj_n]]
                    im_n = im_n + 1
        
                    if im_n ==2:
                        break
        
            distract_inanim_art = final_distract +  [object_class]
        
        
        print(distract_anim_nat)
        print(distract_inanim_nat)
        print(distract_inanim_art)
        prompts = distract_anim_nat[0:3] + distract_inanim_nat[0:3] + distract_inanim_art[0:3]
        #prompts = [distract_anim_nat[0]] + [distract_anim_nat[1]] + [distract_anim_nat[2]] + [distract_inanim_nat[0]] + [distract_inanim_nat[1]] + [distract_inanim_nat[2]] + [distract_inanim_art[0]] + [distract_inanim_art[1]] + [distract_inanim_art[2]]
        
        #Image file path is established for each trial
        img_file = f'Stim/{object_class}/{object_class}({int_rand}).JPEG' 
        print(img_file)
        shuffle(prompts)
        print(prompts)
        
        #Assign prompts to all nine prompts
        prompt1 = prompts[0]
        prompt2 = prompts[1]
        prompt3 = prompts[2]
        prompt4 = prompts[3]
        prompt5 = prompts[4]
        prompt6 = prompts[5]
        prompt7 = prompts[6]
        prompt8 = prompts[7]
        prompt9 = prompts[8]
        
        # Run 'Begin Routine' code from code_correct
        corr_label = object_class
        
        if prompt1 == corr_label:
            corr_response = "1"
        
        if prompt2 == corr_label:
            corr_response = "2"
            
        if prompt3 == corr_label:
            corr_response = "3"
            
        if prompt4 == corr_label: 
            corr_response = "4"
        
        if prompt5 == corr_label:
            corr_response = "5"
            
        if prompt6 == corr_label:
            corr_response = "6"
        
        if prompt7 == corr_label:
            corr_response = "7"
        
        if prompt8 == corr_label:
            corr_response = "8"
        
        if prompt9 == corr_label: 
            corr_response = "9"
                
            
        thisExp.addData('corr_ans', corr_response)
        print(corr_response)
        # Run 'Begin Routine' code from code_data_sheet
        #Add additional column to data sheet for prompts
        thisExp.addData('prompt_1', prompts[0])
        thisExp.addData('prompt_2', prompts[1])
        thisExp.addData('prompt_3', prompts[2])
        thisExp.addData('prompt_4', prompts[3])
        thisExp.addData('prompt_5', prompts[4])
        thisExp.addData('prompt_6', prompts[5])
        thisExp.addData('prompt_7', prompts[6])
        thisExp.addData('prompt_8', prompts[7])
        thisExp.addData('prompt_9', prompts[8])
        
        #Add additional column to data sheet for correct response for animacy (0=False,1=True)
        
        # store start times for fix
        fix.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        fix.tStart = globalClock.getTime(format='float')
        fix.status = STARTED
        fix.maxDuration = None
        # keep track of which components have finished
        fixComponents = fix.components
        for thisComponent in fix.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "fix" ---
        # if trial has changed, end Routine now
        if isinstance(loop, data.TrialHandler2) and thisLoop.thisN != loop.thisTrial.thisN:
            continueRoutine = False
        fix.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 0.5:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *cross* updates
            
            # if cross is starting this frame...
            if cross.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                cross.frameNStart = frameN  # exact frame index
                cross.tStart = t  # local t and not account for scr refresh
                cross.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cross, 'tStartRefresh')  # time at next scr refresh
                # update status
                cross.status = STARTED
                cross.setAutoDraw(True)
            
            # if cross is active this frame...
            if cross.status == STARTED:
                # update params
                pass
            
            # if cross is stopping this frame...
            if cross.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > cross.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    cross.tStop = t  # not accounting for scr refresh
                    cross.tStopRefresh = tThisFlipGlobal  # on global time
                    cross.frameNStop = frameN  # exact frame index
                    # update status
                    cross.status = FINISHED
                    cross.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                fix.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in fix.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "fix" ---
        for thisComponent in fix.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for fix
        fix.tStop = globalClock.getTime(format='float')
        fix.tStopRefresh = tThisFlipGlobal
        # Run 'End Routine' code from code_data_sheet
        #Add additional column to data sheet for correct response for animacy
        #Convert and add response label to data sheet
        '''''num_label_convert = {
            '1': prompt1(0),
            '2': prompt2,
            '3': prompt3,
            '4': prompt4,
            '5': prompt5,
            '6': prompt6,
            '7': prompt7,
            '8': prompt8,
            '9': prompt9}
        
        print(num_label_convert);
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if fix.maxDurationReached:
            routineTimer.addTime(-fix.maxDuration)
        elif fix.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.500000)
        
        # --- Prepare to start Routine "stim" ---
        # create an object to store info about Routine stim
        stim = data.Routine(
            name='stim',
            components=[stimuli],
        )
        stim.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        stimuli.setImage(img_file)
        # store start times for stim
        stim.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        stim.tStart = globalClock.getTime(format='float')
        stim.status = STARTED
        stim.maxDuration = None
        # keep track of which components have finished
        stimComponents = stim.components
        for thisComponent in stim.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "stim" ---
        # if trial has changed, end Routine now
        if isinstance(loop, data.TrialHandler2) and thisLoop.thisN != loop.thisTrial.thisN:
            continueRoutine = False
        stim.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 0.3:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *stimuli* updates
            
            # if stimuli is starting this frame...
            if stimuli.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                stimuli.frameNStart = frameN  # exact frame index
                stimuli.tStart = t  # local t and not account for scr refresh
                stimuli.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(stimuli, 'tStartRefresh')  # time at next scr refresh
                # update status
                stimuli.status = STARTED
                stimuli.setAutoDraw(True)
            
            # if stimuli is active this frame...
            if stimuli.status == STARTED:
                # update params
                pass
            
            # if stimuli is stopping this frame...
            if stimuli.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > stimuli.tStartRefresh + 0.3-frameTolerance:
                    # keep track of stop time/frame for later
                    stimuli.tStop = t  # not accounting for scr refresh
                    stimuli.tStopRefresh = tThisFlipGlobal  # on global time
                    stimuli.frameNStop = frameN  # exact frame index
                    # update status
                    stimuli.status = FINISHED
                    stimuli.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                stim.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in stim.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "stim" ---
        for thisComponent in stim.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for stim
        stim.tStop = globalClock.getTime(format='float')
        stim.tStopRefresh = tThisFlipGlobal
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if stim.maxDurationReached:
            routineTimer.addTime(-stim.maxDuration)
        elif stim.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.300000)
        
        # --- Prepare to start Routine "mask" ---
        # create an object to store info about Routine mask
        mask = data.Routine(
            name='mask',
            components=[image_mask],
        )
        mask.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        image_mask.setImage('Stim/rgb_mask.jpg')
        # store start times for mask
        mask.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        mask.tStart = globalClock.getTime(format='float')
        mask.status = STARTED
        mask.maxDuration = None
        # keep track of which components have finished
        maskComponents = mask.components
        for thisComponent in mask.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "mask" ---
        # if trial has changed, end Routine now
        if isinstance(loop, data.TrialHandler2) and thisLoop.thisN != loop.thisTrial.thisN:
            continueRoutine = False
        mask.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 0.15:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image_mask* updates
            
            # if image_mask is starting this frame...
            if image_mask.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image_mask.frameNStart = frameN  # exact frame index
                image_mask.tStart = t  # local t and not account for scr refresh
                image_mask.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image_mask, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'image_mask.started')
                # update status
                image_mask.status = STARTED
                image_mask.setAutoDraw(True)
            
            # if image_mask is active this frame...
            if image_mask.status == STARTED:
                # update params
                pass
            
            # if image_mask is stopping this frame...
            if image_mask.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image_mask.tStartRefresh + 0.15-frameTolerance:
                    # keep track of stop time/frame for later
                    image_mask.tStop = t  # not accounting for scr refresh
                    image_mask.tStopRefresh = tThisFlipGlobal  # on global time
                    image_mask.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_mask.stopped')
                    # update status
                    image_mask.status = FINISHED
                    image_mask.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                mask.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in mask.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "mask" ---
        for thisComponent in mask.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for mask
        mask.tStop = globalClock.getTime(format='float')
        mask.tStopRefresh = tThisFlipGlobal
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if mask.maxDurationReached:
            routineTimer.addTime(-mask.maxDuration)
        elif mask.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.150000)
        
        # --- Prepare to start Routine "prompt" ---
        # create an object to store info about Routine prompt
        prompt = data.Routine(
            name='prompt',
            components=[resp1, label1, resp2, label2, resp3, label3, resp4, label4, resp5, label5, resp6, label6, resp7, label7, resp8, label8, resp9, label9, key_resp],
        )
        prompt.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        resp1.setText('(1)')
        label1.setText(prompt1)
        resp2.setText('(2)')
        label2.setText(prompt2)
        resp3.setText('(3)')
        label3.setText(prompt3)
        resp4.setText('(4)')
        label4.setText(prompt4)
        resp5.setText('(5)')
        label5.setText(prompt5)
        resp6.setText('(6)')
        label6.setText(prompt6)
        resp7.setText('(7)')
        label7.setText(prompt7)
        resp8.setText('(8)')
        label8.setText(prompt8)
        resp9.setText('(9)')
        label9.setText(prompt9)
        # create starting attributes for key_resp
        key_resp.keys = []
        key_resp.rt = []
        _key_resp_allKeys = []
        # store start times for prompt
        prompt.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        prompt.tStart = globalClock.getTime(format='float')
        prompt.status = STARTED
        prompt.maxDuration = None
        # keep track of which components have finished
        promptComponents = prompt.components
        for thisComponent in prompt.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "prompt" ---
        # if trial has changed, end Routine now
        if isinstance(loop, data.TrialHandler2) and thisLoop.thisN != loop.thisTrial.thisN:
            continueRoutine = False
        prompt.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *resp1* updates
            
            # if resp1 is starting this frame...
            if resp1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                resp1.frameNStart = frameN  # exact frame index
                resp1.tStart = t  # local t and not account for scr refresh
                resp1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(resp1, 'tStartRefresh')  # time at next scr refresh
                # update status
                resp1.status = STARTED
                resp1.setAutoDraw(True)
            
            # if resp1 is active this frame...
            if resp1.status == STARTED:
                # update params
                pass
            
            # *label1* updates
            
            # if label1 is starting this frame...
            if label1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                label1.frameNStart = frameN  # exact frame index
                label1.tStart = t  # local t and not account for scr refresh
                label1.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(label1, 'tStartRefresh')  # time at next scr refresh
                # update status
                label1.status = STARTED
                label1.setAutoDraw(True)
            
            # if label1 is active this frame...
            if label1.status == STARTED:
                # update params
                pass
            
            # *resp2* updates
            
            # if resp2 is starting this frame...
            if resp2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                resp2.frameNStart = frameN  # exact frame index
                resp2.tStart = t  # local t and not account for scr refresh
                resp2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(resp2, 'tStartRefresh')  # time at next scr refresh
                # update status
                resp2.status = STARTED
                resp2.setAutoDraw(True)
            
            # if resp2 is active this frame...
            if resp2.status == STARTED:
                # update params
                pass
            
            # *label2* updates
            
            # if label2 is starting this frame...
            if label2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                label2.frameNStart = frameN  # exact frame index
                label2.tStart = t  # local t and not account for scr refresh
                label2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(label2, 'tStartRefresh')  # time at next scr refresh
                # update status
                label2.status = STARTED
                label2.setAutoDraw(True)
            
            # if label2 is active this frame...
            if label2.status == STARTED:
                # update params
                pass
            
            # *resp3* updates
            
            # if resp3 is starting this frame...
            if resp3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                resp3.frameNStart = frameN  # exact frame index
                resp3.tStart = t  # local t and not account for scr refresh
                resp3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(resp3, 'tStartRefresh')  # time at next scr refresh
                # update status
                resp3.status = STARTED
                resp3.setAutoDraw(True)
            
            # if resp3 is active this frame...
            if resp3.status == STARTED:
                # update params
                pass
            
            # *label3* updates
            
            # if label3 is starting this frame...
            if label3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                label3.frameNStart = frameN  # exact frame index
                label3.tStart = t  # local t and not account for scr refresh
                label3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(label3, 'tStartRefresh')  # time at next scr refresh
                # update status
                label3.status = STARTED
                label3.setAutoDraw(True)
            
            # if label3 is active this frame...
            if label3.status == STARTED:
                # update params
                pass
            
            # *resp4* updates
            
            # if resp4 is starting this frame...
            if resp4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                resp4.frameNStart = frameN  # exact frame index
                resp4.tStart = t  # local t and not account for scr refresh
                resp4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(resp4, 'tStartRefresh')  # time at next scr refresh
                # update status
                resp4.status = STARTED
                resp4.setAutoDraw(True)
            
            # if resp4 is active this frame...
            if resp4.status == STARTED:
                # update params
                pass
            
            # *label4* updates
            
            # if label4 is starting this frame...
            if label4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                label4.frameNStart = frameN  # exact frame index
                label4.tStart = t  # local t and not account for scr refresh
                label4.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(label4, 'tStartRefresh')  # time at next scr refresh
                # update status
                label4.status = STARTED
                label4.setAutoDraw(True)
            
            # if label4 is active this frame...
            if label4.status == STARTED:
                # update params
                pass
            
            # *resp5* updates
            
            # if resp5 is starting this frame...
            if resp5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                resp5.frameNStart = frameN  # exact frame index
                resp5.tStart = t  # local t and not account for scr refresh
                resp5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(resp5, 'tStartRefresh')  # time at next scr refresh
                # update status
                resp5.status = STARTED
                resp5.setAutoDraw(True)
            
            # if resp5 is active this frame...
            if resp5.status == STARTED:
                # update params
                pass
            
            # *label5* updates
            
            # if label5 is starting this frame...
            if label5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                label5.frameNStart = frameN  # exact frame index
                label5.tStart = t  # local t and not account for scr refresh
                label5.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(label5, 'tStartRefresh')  # time at next scr refresh
                # update status
                label5.status = STARTED
                label5.setAutoDraw(True)
            
            # if label5 is active this frame...
            if label5.status == STARTED:
                # update params
                pass
            
            # *resp6* updates
            
            # if resp6 is starting this frame...
            if resp6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                resp6.frameNStart = frameN  # exact frame index
                resp6.tStart = t  # local t and not account for scr refresh
                resp6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(resp6, 'tStartRefresh')  # time at next scr refresh
                # update status
                resp6.status = STARTED
                resp6.setAutoDraw(True)
            
            # if resp6 is active this frame...
            if resp6.status == STARTED:
                # update params
                pass
            
            # *label6* updates
            
            # if label6 is starting this frame...
            if label6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                label6.frameNStart = frameN  # exact frame index
                label6.tStart = t  # local t and not account for scr refresh
                label6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(label6, 'tStartRefresh')  # time at next scr refresh
                # update status
                label6.status = STARTED
                label6.setAutoDraw(True)
            
            # if label6 is active this frame...
            if label6.status == STARTED:
                # update params
                pass
            
            # *resp7* updates
            
            # if resp7 is starting this frame...
            if resp7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                resp7.frameNStart = frameN  # exact frame index
                resp7.tStart = t  # local t and not account for scr refresh
                resp7.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(resp7, 'tStartRefresh')  # time at next scr refresh
                # update status
                resp7.status = STARTED
                resp7.setAutoDraw(True)
            
            # if resp7 is active this frame...
            if resp7.status == STARTED:
                # update params
                pass
            
            # *label7* updates
            
            # if label7 is starting this frame...
            if label7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                label7.frameNStart = frameN  # exact frame index
                label7.tStart = t  # local t and not account for scr refresh
                label7.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(label7, 'tStartRefresh')  # time at next scr refresh
                # update status
                label7.status = STARTED
                label7.setAutoDraw(True)
            
            # if label7 is active this frame...
            if label7.status == STARTED:
                # update params
                pass
            
            # *resp8* updates
            
            # if resp8 is starting this frame...
            if resp8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                resp8.frameNStart = frameN  # exact frame index
                resp8.tStart = t  # local t and not account for scr refresh
                resp8.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(resp8, 'tStartRefresh')  # time at next scr refresh
                # update status
                resp8.status = STARTED
                resp8.setAutoDraw(True)
            
            # if resp8 is active this frame...
            if resp8.status == STARTED:
                # update params
                pass
            
            # *label8* updates
            
            # if label8 is starting this frame...
            if label8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                label8.frameNStart = frameN  # exact frame index
                label8.tStart = t  # local t and not account for scr refresh
                label8.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(label8, 'tStartRefresh')  # time at next scr refresh
                # update status
                label8.status = STARTED
                label8.setAutoDraw(True)
            
            # if label8 is active this frame...
            if label8.status == STARTED:
                # update params
                pass
            
            # *resp9* updates
            
            # if resp9 is starting this frame...
            if resp9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                resp9.frameNStart = frameN  # exact frame index
                resp9.tStart = t  # local t and not account for scr refresh
                resp9.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(resp9, 'tStartRefresh')  # time at next scr refresh
                # update status
                resp9.status = STARTED
                resp9.setAutoDraw(True)
            
            # if resp9 is active this frame...
            if resp9.status == STARTED:
                # update params
                pass
            
            # *label9* updates
            
            # if label9 is starting this frame...
            if label9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                label9.frameNStart = frameN  # exact frame index
                label9.tStart = t  # local t and not account for scr refresh
                label9.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(label9, 'tStartRefresh')  # time at next scr refresh
                # update status
                label9.status = STARTED
                label9.setAutoDraw(True)
            
            # if label9 is active this frame...
            if label9.status == STARTED:
                # update params
                pass
            
            # *key_resp* updates
            waitOnFlip = False
            
            # if key_resp is starting this frame...
            if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp.frameNStart = frameN  # exact frame index
                key_resp.tStart = t  # local t and not account for scr refresh
                key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp.started')
                # update status
                key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp.status == STARTED and not waitOnFlip:
                theseKeys = key_resp.getKeys(keyList=['1','2','3','4','5','6','7','8','9'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_allKeys.extend(theseKeys)
                if len(_key_resp_allKeys):
                    key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                    key_resp.rt = _key_resp_allKeys[-1].rt
                    key_resp.duration = _key_resp_allKeys[-1].duration
                    # was this correct?
                    if (key_resp.keys == str(corr_response)) or (key_resp.keys == corr_response):
                        key_resp.corr = 1
                    else:
                        key_resp.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                prompt.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in prompt.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "prompt" ---
        for thisComponent in prompt.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for prompt
        prompt.tStop = globalClock.getTime(format='float')
        prompt.tStopRefresh = tThisFlipGlobal
        # check responses
        if key_resp.keys in ['', [], None]:  # No response was made
            key_resp.keys = None
            # was no response the correct answer?!
            if str(corr_response).lower() == 'none':
               key_resp.corr = 1;  # correct non-response
            else:
               key_resp.corr = 0;  # failed to respond (incorrectly)
        # store data for loop (TrialHandler)
        loop.addData('key_resp.keys',key_resp.keys)
        loop.addData('key_resp.corr', key_resp.corr)
        if key_resp.keys != None:  # we had a response
            loop.addData('key_resp.rt', key_resp.rt)
            loop.addData('key_resp.duration', key_resp.duration)
        # the Routine "prompt" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 4.0 repeats of 'loop'
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED
    logging.flush()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
