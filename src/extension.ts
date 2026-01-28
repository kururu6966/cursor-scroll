import * as vscode from 'vscode';

export const activate = (context: vscode.ExtensionContext) => {
  const centerCommand = vscode.commands.registerCommand('scroll-position.center', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const lineNumber = editor.selection.active.line;
      vscode.commands.executeCommand('revealLine', {
        lineNumber,
        at: 'center'
      });
    }
  });

  const topCommand = vscode.commands.registerCommand('scroll-position.top', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const lineNumber = editor.selection.active.line;
      vscode.commands.executeCommand('revealLine', {
        lineNumber,
        at: 'top'
      });
    }
  });

  const bottomCommand = vscode.commands.registerCommand('scroll-position.bottom', () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const lineNumber = editor.selection.active.line;
      vscode.commands.executeCommand('revealLine', {
        lineNumber,
        at: 'bottom'
      });
    }
  });

  context.subscriptions.push(centerCommand, topCommand, bottomCommand);
};

export const deactivate = () => {};
