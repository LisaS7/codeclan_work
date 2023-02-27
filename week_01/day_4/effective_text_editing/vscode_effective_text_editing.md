# Effective Text Editing

**Lesson Duration: 45 minutes**

### Learning Objectives
- Be able to use VSCode effectively
- Be able to install a package
- Know some keyboard shortcuts
- Understand that custom keyboard shortcuts can be added

## Developers Edit Text a Lot

As a developer you are going to spend a large portion of your time in front of a computer typing code and there's no escaping it. Given that computer programs are essentially just text files written in a special syntax i.e. a programming language you will want to make friends with your editor of choice.


## IDEs Vs Text Editors

In some languages, you really have no choice but to use an IDE, or Integrated Development Environment. This is an all-singing, all-dancing, program that provides everything you need to

* create
* edit
* test
* and deploy a software project

All in one place. They are normally fairly large, expensive pieces of software as a result.

Popular examples of IDEs are [IntelliJ IDEA](https://www.jetbrains.com/idea/), [Eclipse](https://eclipse.org/), [Xcode](https://developer.apple.com/xcode/), and [Visual Studio](https://www.visualstudio.com/).

The other option is text editors designed for programming (like VSCode). These are much more limited in their scope, focussing on the job of helping your write good code but not as full featured. Because of this, you must also be comfortable manually performing the tasks that an IDE might abstract for you (e.g. like running tests).

However, the benefit is that text editors can be super light and fast when you want to get things done, or you're working on something small. even to make a tiny 1 page web app in Android Studio takes about 10 minutes while you wait on it spinning up.

Some programming languages are rarely used outside of an IDE (e.g. C#). In fact if you wrote C# without Visual Studio you would be in for a world of hurt and the other developers would think you had lost your mind.

For Python and JavaScript it is very common to just use a text editor, although there are IDEs that support both languages. Either way, it is better to learn how to code using just a text editor and command line as this way you learn all the fundamental concepts that an IDE can hide from you.

Some developers prefer IDEs, some prefer text editors. Sometimes a company might ask you to use their tool of choice, sometimes they might let you use whatever your want to.

## Efficiency

An important part of this coupling to our editor of choice is making not only friends, but best friends with it. Once you have learned the basics, move onto more advanced research about customisation and shortcuts.

It may seem trivial but it can make a huge impact to your productivity as a developer.

> Replace this with your own example.

As an example, my team lead used to provide top level estimates for projects. He never used any shortcuts, customisations or anything. He basically used Visual Studio like Notepad... which is kind of like using a Ferrari to go to down to Aldi and do the shopping.

I would get the work to do and complete it in a quarter of the time, because I was so much more efficient with my shortcuts. I could then use that time to learn new techniques, refactor my code and try stuff I wouldn't have had time to do otherwise. The faster you can do stuff, the faster you can get on to trying fun stuff.

## VSCode

https://code.visualstudio.com/docs

VSCode is:

* multi-platform (OS X, Windows, Linux)
* popular (widely used for web development)
* free and open source
* extensible (we can add functionality via plugins called 'extensions')

It also comes with a lot of really cool shortcuts and other tools we can use.

## Auto Indent

Indenting code properly is really important. To get indent code we need to make sure we have the `Microsoft Python` extension installed. If not install it now.

Once installed open settings (cmd+,) and go to extensions > Python. Scroll down to Formatting Providor and select `black`. 

No indent some code in a for loop, function or if statement back so that it only has 1 or 2 spaces.

Hit `shift` + `option` + `f` to format the code. (It may ask you to install the `black` formatter tool)


## Command Palette

If you only ever memorise one keyboard shortcut, make it `cmd` + `shift` + `p`. This opens up the Command Palette, a list of every function VSCode can do, either built-in or through packages. You can type in what you want to do as text (e.g. "Copy") and it will search for the appropriate command. If a keyboard shortcut exists for the command, it will also show up here.

## Menus

VSCode's menu system is also pretty in-depth, with a lot (but not all!) of its functions sorted into relevant menus. The menus also let you know keyboard shortcuts when they are available.

> Task: Investigate interesting keyboard shortcuts for VSCode, using the menus and command palette

### Useful Shortcuts

Keypress          |  Action
------------------|---------
`cmd` + `shift` + `p`        |  take us to a command palette where we will be given menu options without leaving our keyboard.
`cmd` + `s`                  |  save changes in current tab - DO IT OFTEN!!!
`cmd` + `q`                  |  quit
`cmd` + `w`                  |  close one tab at a time
`cmd` + `option` + `arrow`   |  switch between tabs
`ctrl` + `<number>`           |  switch directly to specific tab
`cmd` + `f`                  |  search in your current file (see below)
`cmd` + `shift` + `f`        |  search the entire project
`option` + `shift` + `down-arrow` |  Copy current line onto next line
`cmd` + `p`                  |  open the file finder
`cmd` + `backspace`          |  delete the line before your cursor
`fn` + `backspace`          |  delete the character after your cursor
`cmd` + `right/left`         |  moves your cursor to the end/beginning of the line

You can get a cheat sheet for these and more at https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf

### Multiple Cursors

A very useful feature of VSCode is being able to use more than one cursor, enabling us to type the same text in more than one place. `cmd` + `option` + `arrow keys` will add extra cursors to your window, allowing you to edit multiple elements at once.

You can also go to the selection menu and choose `Switch to cmd+click for multi-cursor`. Now if you hold down `cmd` and click in the file it will add a cursor wherever you click. When you type it will appear wherever there are cursors

This can be incredibly useful for renaming variables and functions. We can also use `cmd` + `d` to select the word (or name) under the cursor, and use `cmd` + `d` again to select duplicates of it. If we then type, we will replace all selected instances of the text.

## Settings and Themes

`cmd` + `,` allows you to access VSCode's user settings.

From here you can make all sorts of changes to set up your environment, both to the Core VSCode app, and to the Editor window itself. Most of these settings are fine, but one that we instructors find useful for putting code on the projector is:

`Code` -> `Preferences` -> `Settings` 

Search for `scroll beyond last line` and check the box.

You can also change the theme (i.e. make it light or dark) `Code` -> `Preferences` -> `Color Theme`

VSCode's extensions are one of the main reasons VSCode is so popular. The app is not just a text editor, but a rich ecosystem of extensions which add functionality to the editor. If there's something you wish VSCode did, or just did better, there's probably an extension for that!

## Installing Extensions

We've seen that we can use `cmd` + `d` to select duplicates, which is pretty cool. What would be even cooler is if VSCode would let you know what duplicates it's going to select! This would have other uses, too. For example, you could select the name of a function you have defined, and VSCode would highlight where the function is called, because the text of the name would match.

For some reason, the VSCode developers left out this really cool feature. But, because the VSCode community is awesome, someone went and wrote an extension that adds the feature.

https://marketplace.visualstudio.com/items?itemName=rsbondi.highlight-words

From time to time through the course, we'll ask you to install specific extensions relevant to what we're doing. But there is a whole galaxy of extensions out there, and you're encouraged to explore it and find what works for you.

## Custom Keybindings

If you click on `Code` -> `Preferences` -> `Keyboard Shortcuts` you can add or edit keyboard shortcuts to suit your own style.

Click on the icon at the top that looks like this:

![Keybindings icon](img/keybindings.png)

In this file you can add your own keyboard shortcuts. For example to enable a font zoom shortcut paste the following into keybindings.json

```
[
    {
        "key": "cmd+=",
        "command": "editor.action.fontZoomIn"
    },
    {
        "key": "cmd+-",
        "command": "editor.action.fontZoomOut"
    }
]
```


## Summary

* We have given ourselves an idea of the power of VSCode as a text editor for software development
* We are able to add tools to VSCode to match our own specific needs, with extensions
* We can find out keyboard shortcuts for features we use often, speeding up our workflow, through the Command Palette and menu system
* We can add our own custom keyboard shortcuts, in the keybindings.json file