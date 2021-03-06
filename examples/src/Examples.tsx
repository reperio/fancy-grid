import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { AbsoluteBasicGridExample, code as absoluteBasicGridExampleCode } from './AbsoluteBasicGridExample';
import { CustomColumnTitlesExample, code as customColumnTitlesExampleCode } from './CustomColumnTitlesExample';
import { CustomCellRendererExample, code as customCellRendererExampleCode } from './CustomCellRendererExample';
import { PagerExample, code as pagerExampleCode } from './PagerExample';
import { SortableExample, code as sortableExampleCode } from './SortableExample';
import { FilterableExample, code as filterableExample } from './FilterableExample';
import { FilterableWithPopupsExample, code as filterableWithPopupsExample } from './FilterableWithPopupsExample';
import { EverythingExample, code as everythingExampleCode } from './EverythingExample';
import { ReduxExample, code as everythingReduxExample } from './ReduxExample';

export function Examples() {
    return (
        <div className="examples-container">
            <div className="example-container">
                <SyntaxHighlighter language="jsx" style={theme}>{absoluteBasicGridExampleCode}</SyntaxHighlighter>
                <AbsoluteBasicGridExample />
            </div>
            <div className="example-container">
                <SyntaxHighlighter language="jsx" style={theme}>{customColumnTitlesExampleCode}</SyntaxHighlighter>
                <CustomColumnTitlesExample />
            </div>
            <div className="example-container">
                <SyntaxHighlighter language="jsx" style={theme}>{customCellRendererExampleCode}</SyntaxHighlighter>
                <CustomCellRendererExample />
            </div>
            <div className="example-container">
                <SyntaxHighlighter language="jsx" style={theme}>{pagerExampleCode}</SyntaxHighlighter>
                <PagerExample />
            </div>
            <div className="example-container">
                <SyntaxHighlighter language="jsx" style={theme}>{sortableExampleCode}</SyntaxHighlighter>
                <SortableExample />
            </div>
            <div className="example-container">
                <SyntaxHighlighter language="jsx" style={theme}>{filterableExample}</SyntaxHighlighter>
                <FilterableExample />
            </div>
            <div className="example-container">
                <SyntaxHighlighter language="jsx" style={theme}>{filterableWithPopupsExample}</SyntaxHighlighter>
                <FilterableWithPopupsExample />
            </div>
            <div className="example-container">
                <SyntaxHighlighter language="jsx" style={theme}>{everythingExampleCode}</SyntaxHighlighter>
                <EverythingExample />
            </div>
            <div className="example-container">
                <SyntaxHighlighter language="jsx" style={theme}>{everythingReduxExample}</SyntaxHighlighter>
                <ReduxExample />
            </div>
        </div>
    )
}