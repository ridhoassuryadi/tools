
// Note: This file is generated and has known type-checking warnings
// due to differences between the estree TypeScript declarations and
// the AST nodes defined by ast-types.

// This file is meant to be paired with a hand-written jscodeshift.d.ts
// that exports jscodeshift

declare module 'jscodeshift' {

  declare module jscodeshift {

    import * as estree from 'estree';

    export function sourceLocation(start: estree.Position, end: estree.Position, source?: (string|null)): estree.SourceLocation;

    export function position(line: number, column: number): estree.Position;

    export function file(program: estree.Program, name?: (string|null)): estree.File;

    export function program(body: estree.Statement[]): estree.Program;

    export function identifier(name: string): estree.Identifier;

    export function blockStatement(body: estree.Statement[]): estree.BlockStatement;

    export function emptyStatement(): estree.EmptyStatement;

    export function expressionStatement(expression: estree.Expression): estree.ExpressionStatement;

    export function ifStatement(test: estree.Expression, consequent: estree.Statement, alternate?: (estree.Statement|null)): estree.IfStatement;

    export function labeledStatement(label: estree.Identifier, body: estree.Statement): estree.LabeledStatement;

    export function breakStatement(label?: (estree.Identifier|null)): estree.BreakStatement;

    export function continueStatement(label?: (estree.Identifier|null)): estree.ContinueStatement;

    export function withStatement(object: estree.Expression, body: estree.Statement): estree.WithStatement;

    export function switchStatement(discriminant: estree.Expression, cases: estree.SwitchCase[], lexical?: boolean): estree.SwitchStatement;

    export function switchCase(test: (estree.Expression|null), consequent: estree.Statement[]): estree.SwitchCase;

    export function returnStatement(argument?: (estree.Expression|null)): estree.ReturnStatement;

    export function throwStatement(argument: estree.Expression): estree.ThrowStatement;

    export function tryStatement(block: estree.BlockStatement, handler?: (estree.CatchClause|null), finalizer?: (estree.BlockStatement|null)): estree.TryStatement;

    export function catchClause(param: estree.Pattern, guard: (estree.Expression|null), body: estree.BlockStatement): estree.CatchClause;

    export function whileStatement(test: estree.Expression, body: estree.Statement): estree.WhileStatement;

    export function doWhileStatement(body: estree.Statement, test: estree.Expression): estree.DoWhileStatement;

    export function forStatement(init: (estree.VariableDeclaration|estree.Expression|null), test: (estree.Expression|null), update: (estree.Expression|null), body: estree.Statement): estree.ForStatement;

    export function variableDeclaration(kind: ('var'|'let'|'const'), declarations: (estree.VariableDeclarator|estree.Identifier)[]): estree.VariableDeclaration;

    export function forInStatement(left: (estree.VariableDeclaration|estree.Expression), right: estree.Expression, body: estree.Statement): estree.ForInStatement;

    export function debuggerStatement(): estree.DebuggerStatement;

    export function functionDeclaration(id: estree.Identifier, params: estree.Pattern[], body: estree.BlockStatement, generator?: boolean, expression?: boolean): estree.FunctionDeclaration;

    export function functionExpression(id: (estree.Identifier|null), params: estree.Pattern[], body: estree.BlockStatement, generator?: boolean, expression?: boolean): estree.FunctionExpression;

    export function variableDeclarator(id: estree.Pattern, init?: (estree.Expression|null)): estree.VariableDeclarator;

    export function thisExpression(): estree.ThisExpression;

    export function arrayExpression(elements?: (estree.Expression|estree.SpreadElement|estree.RestElement|null)[]): estree.ArrayExpression;

    export function objectExpression(properties: estree.Property[]): estree.ObjectExpression;

    export function property(kind: ('init'|'get'|'set'), key: (estree.Literal|estree.Identifier|estree.Expression), value: (estree.Expression|estree.Pattern)): estree.Property;

    export function literal(value?: (string|boolean|null|number|RegExp)): estree.Literal;

    export function sequenceExpression(expressions: estree.Expression[]): estree.SequenceExpression;

    export function unaryExpression(operator: ('-'|'+'|'!'|'~'|'typeof'|'void'|'delete'), argument: estree.Expression, prefix?: boolean): estree.UnaryExpression;

    export function binaryExpression(operator: ('=='|'!='|'==='|'!=='|'<'|'<='|'>'|'>='|'<<'|'>>'|'>>>'|'+'|'-'|'*'|'/'|'%'|'&'|'|'|'^'|'in'|'instanceof'|'..'), left: estree.Expression, right: estree.Expression): estree.BinaryExpression;

    export function assignmentExpression(operator: ('='|'+='|'-='|'*='|'/='|'%='|'<<='|'>>='|'>>>='|'|='|'^='|'&='), left: estree.Pattern, right: estree.Expression): estree.AssignmentExpression;

    export function updateExpression(operator: ('++'|'--'), argument: estree.Expression, prefix: boolean): estree.UpdateExpression;

    export function logicalExpression(operator: ('||'|'&&'), left: estree.Expression, right: estree.Expression): estree.LogicalExpression;

    export function conditionalExpression(test: estree.Expression, consequent: estree.Expression, alternate: estree.Expression): estree.ConditionalExpression;

    export function newExpression(callee: estree.Expression, arguments: (estree.Expression|estree.SpreadElement)[]): estree.NewExpression;

    export function callExpression(callee: estree.Expression, arguments: (estree.Expression|estree.SpreadElement)[]): estree.CallExpression;

    export function memberExpression(object: estree.Expression, property: (estree.Identifier|estree.Expression), computed?: boolean): estree.MemberExpression;

    export function restElement(argument: estree.Pattern): estree.RestElement;

    export function spreadElementPattern(argument: estree.Pattern): estree.SpreadElementPattern;

    export function arrowFunctionExpression(params: estree.Pattern[], body: (estree.BlockStatement|estree.Expression), expression?: boolean): estree.ArrowFunctionExpression;

    export function forOfStatement(left: (estree.VariableDeclaration|estree.Pattern), right: estree.Expression, body: estree.Statement): estree.ForOfStatement;

    export function yieldExpression(argument?: (estree.Expression|null), delegate?: boolean): estree.YieldExpression;

    export function generatorExpression(body: estree.Expression, blocks: estree.ComprehensionBlock[], filter?: (estree.Expression|null)): estree.GeneratorExpression;

    export function comprehensionBlock(left: estree.Pattern, right: estree.Expression, each: boolean): estree.ComprehensionBlock;

    export function comprehensionExpression(body: estree.Expression, blocks: estree.ComprehensionBlock[], filter?: (estree.Expression|null)): estree.ComprehensionExpression;

    export function propertyPattern(key: (estree.Literal|estree.Identifier|estree.Expression), pattern: estree.Pattern): estree.PropertyPattern;

    export function objectPattern(properties: (estree.Property|estree.PropertyPattern|estree.SpreadPropertyPattern|estree.SpreadProperty)[]): estree.ObjectPattern;

    export function arrayPattern(elements?: (estree.Pattern|estree.SpreadElement|null)[]): estree.ArrayPattern;

    export function methodDefinition(kind: ('constructor'|'method'|'get'|'set'), key: (estree.Literal|estree.Identifier|estree.Expression), value: estree.Function, static?: boolean): estree.MethodDefinition;

    export function spreadElement(argument: estree.Expression): estree.SpreadElement;

    export function assignmentPattern(left: estree.Pattern, right: estree.Expression): estree.AssignmentPattern;

    export function classPropertyDefinition(definition: (estree.MethodDefinition|estree.VariableDeclarator|estree.ClassPropertyDefinition|estree.ClassProperty)): estree.ClassPropertyDefinition;

    export function classProperty(key: (estree.Literal|estree.Identifier|estree.Expression)): estree.ClassProperty;

    export function classBody(body: (estree.MethodDefinition|estree.VariableDeclarator|estree.ClassPropertyDefinition|estree.ClassProperty)[]): estree.ClassBody;

    export function classDeclaration(id: (estree.Identifier|null), body: estree.ClassBody, superClass?: (estree.Expression|null)): estree.ClassDeclaration;

    export function classExpression(id: (estree.Identifier|null), body: estree.ClassBody, superClass?: (estree.Expression|null)): estree.ClassExpression;

    export function classImplements(id: estree.Identifier): estree.ClassImplements;

    export function taggedTemplateExpression(tag: estree.Expression, quasi: estree.TemplateLiteral): estree.TaggedTemplateExpression;

    export function templateLiteral(quasis: estree.TemplateElement[], expressions: estree.Expression[]): estree.TemplateLiteral;

    export function templateElement(value: '[object Object]', tail: boolean): estree.TemplateElement;

    export function noop(): estree.Noop;

    export function doExpression(body: estree.Statement[]): estree.DoExpression;

    // export function super(): estree.Super;

    export function bindExpression(object: (estree.Expression|null), callee: estree.Expression): estree.BindExpression;

    export function decorator(expression: estree.Expression): estree.Decorator;

    export function metaProperty(meta: estree.Identifier, property: estree.Identifier): estree.MetaProperty;

    export function parenthesizedExpression(expression: estree.Expression): estree.ParenthesizedExpression;

    export function importSpecifier(id?: (estree.Identifier|null), name?: (estree.Identifier|null)): estree.ImportSpecifier;

    export function importDefaultSpecifier(id?: (estree.Identifier|null)): estree.ImportDefaultSpecifier;

    export function importNamespaceSpecifier(id?: (estree.Identifier|null)): estree.ImportNamespaceSpecifier;

    export function exportDefaultDeclaration(declaration: (estree.Declaration|estree.Expression)): estree.ExportDefaultDeclaration;

    export function exportNamedDeclaration(declaration?: (estree.Declaration|null), specifiers?: estree.ExportSpecifier[], source?: (estree.Literal|null)): estree.ExportNamedDeclaration;

    export function exportSpecifier(id?: (estree.Identifier|null), name?: (estree.Identifier|null)): estree.ExportSpecifier;

    export function exportNamespaceSpecifier(exported: estree.Identifier): estree.ExportNamespaceSpecifier;

    export function exportDefaultSpecifier(exported: estree.Identifier): estree.ExportDefaultSpecifier;

    export function exportAllDeclaration(exported: (estree.Identifier|null), source: estree.Literal): estree.ExportAllDeclaration;

    export function commentBlock(value: string, leading?: boolean, trailing?: boolean): estree.CommentBlock;

    export function commentLine(value: string, leading?: boolean, trailing?: boolean): estree.CommentLine;

    export function exportBatchSpecifier(): estree.ExportBatchSpecifier;

    export function exportDeclaration(default_: boolean, declaration?: (estree.Declaration|estree.Expression|null), specifiers?: (estree.ExportSpecifier|estree.ExportBatchSpecifier)[], source?: (estree.Literal|null)): estree.ExportDeclaration;

    export function importDeclaration(specifiers: (estree.ImportSpecifier|estree.ImportNamespaceSpecifier|estree.ImportDefaultSpecifier)[], source: estree.Literal, importKind?: ('value'|'type')): estree.ImportDeclaration;

    export function block(value: string, leading?: boolean, trailing?: boolean): estree.Block;

    export function line(value: string, leading?: boolean, trailing?: boolean): estree.Line;

  }

}

