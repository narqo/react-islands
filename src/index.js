import React, { Component } from 'react';
import { render } from 'react-dom';

import Button from 'react-islands/components/Button';
import Link from 'react-islands/components/Link';
import CheckboxGroup from 'react-islands/components/CheckboxGroup';
import Checkbox from 'react-islands/components/Checkbox';
import TextInput from 'react-islands/components/TextInput';
import TextArea from 'react-islands/components/TextArea';
import Select from 'react-islands/components/Select';
import Menu from 'react-islands/components/Menu';
import Group from 'react-islands/components/Group';
import Item from 'react-islands/components/Item';
import Modal from 'react-islands/components/Modal';
import ProgressBar from 'react-islands/components/ProgressBar';
import RadioGroup from 'react-islands/components/RadioGroup';
import Radio from 'react-islands/components/Radio';
import Spinner from 'react-islands/components/Spinner';

import { Layout, LayoutCell } from './components/Layout';

class Showcase extends Component {
    constructor() {
        super();
        this.state = {
            checkboxGroupValue: ['n', 'p'],
            radioGroupValue: 'n',
            radioGroupButtonValue: 'any',
            selectValue: [],
            selectMoodValue: ['20'],
            modalVisible: false,
            progressActive: false,
        };
    }

    render() {
        return (
            <Layout>
                <LayoutCell title="Button">
                    <Button theme="islands" size="s">size S</Button>
                </LayoutCell>

                <LayoutCell title="CheckboxGroup">
                    <CheckboxGroup
                        theme="islands"
                        size="l"
                        value={this.state.checkboxGroupValue}
                        onChange={value => this.setState({ checkboxGroupValue: value })}
                    >
                        <Checkbox value="s">Small</Checkbox><br/>
                        <Checkbox value="n">Normal</Checkbox><br/>
                        <Checkbox value="b" disabled>Big</Checkbox><br/>
                        <Checkbox value="p" disabled>Pretty</Checkbox><br/>
                    </CheckboxGroup>
                </LayoutCell>

                <LayoutCell title="TextInput">
                    <TextInput theme="islands" size="l" placeholder="Type a question" hasClear/>
                </LayoutCell>

                <LayoutCell title="Menu">
                    <Menu className="menu-showcase" theme="islands" size="l" mode="radio" value={['30']}>
                        <Item value="10">Show on site</Item>
                        <Item value="20">Cached version</Item>
                        <Item value="30">Search in your pocket</Item>
                    </Menu>
                </LayoutCell>

                <LayoutCell title="Select (mode check)">
                    <Select
                        theme="islands"
                        size="l"
                        mode="check"
                        placeholder="Language"
                        value={this.state.selectValue}
                        onChange={(value) => this.setState({ selectValue: value })}
                    >
                        <Item checkedText="ru" value="10">Русский</Item>
                        <Item checkedText="en" value="20">English</Item>
                        <Item checkedText="pt" value="30">Português</Item>
                        <Item checkedText="jp" value="40">中國</Item>
                    </Select>
                </LayoutCell>

                <LayoutCell title="Button (view action)">
                    <Button theme="islands" size="m" view="action">Just DO it!</Button>
                </LayoutCell>

                <LayoutCell title="RadioGroup">
                    <RadioGroup
                        theme="islands"
                        size="l"
                        value={this.state.radioGroupValue}
                        onChange={value => this.setState({ radioGroupValue: value })}
                    >
                        <Radio value="s">Radio is off</Radio><br/>
                        <Radio value="n">Radio is on</Radio><br/>
                        <Radio value="b" disabled>No, you can't</Radio><br/>
                        <Radio value="p" disabled>You have no choice</Radio><br/>
                    </RadioGroup>
                </LayoutCell>

                <LayoutCell title="RadioGroup (type button)">
                    <RadioGroup
                        theme="islands"
                        size="l"
                        type="button"
                        value={this.state.radioGroupButtonValue}
                        onChange={value => this.setState({ radioGroupButtonValue: value })}
                    >
                        <Radio value="bw">Black & White</Radio>
                        <Radio value="colour">Coloured</Radio>
                        <Radio value="any">Any colour</Radio>
                    </RadioGroup>
                </LayoutCell>

                <LayoutCell title="Select (mode radio-check)">
                    <Select
                        theme="islands"
                        size="l"
                        mode="radio-check"
                        placeholder="How are you today?"
                        value={this.state.selectMoodValue}
                        onChange={(value) => this.setState({ selectMoodValue: value })}
                    >
                        <Item value="10">Bad</Item>
                        <Item value="20">Normal</Item>
                        <Item value="30">Great</Item>
                        <Group>
                            <Item value="40">Lawful Evil</Item>
                            <Item value="50">True Neutral</Item>
                            <Item value="60">Chaotic Good!</Item>
                        </Group>
                    </Select>
                </LayoutCell>

                <LayoutCell title="TextArea">
                    <TextArea theme="islands" size="l" placeholder="Write a review..."/>
                </LayoutCell>

                <LayoutCell title="Modal">
                    <Link
                        theme="islands"
                        size="l"
                        onClick={() => this.setState({ modalVisible: true })}
                    >
                        Open your mind
                    </Link>
                    <Modal
                        className="modal-showcase"
                        theme="islands"
                        visible={this.state.modalVisible}
                        onRequestHide={() => this.setState({ modalVisible: false })}
                    >
                        <div className="text">Your mind was opened!</div>
                        (Click outside the box to close)
                    </Modal>
                </LayoutCell>

                <LayoutCell title="Spinner">
                    <div className="spinner-container">
                        <Spinner theme="islands" size="xs"/>
                        <Spinner theme="islands" size="s"/>
                        <Spinner theme="islands" size="m"/>
                        <Spinner theme="islands" size="l"/>
                        <Spinner theme="islands" size="xl"/>
                    </div>
                </LayoutCell>

                <LayoutCell title="ProgressBar">
                    <ProgressBarExample />
                </LayoutCell>
            </Layout>
        );
    }
}

class ProgressBarExample extends Component {
    constructor() {
        super();
        this.state = {
            progressActive: false,
            progressValue: 30,
        }
    }

    componentDidUpdate(_, { progressActive }) {
        if (this.state.progressActive !== progressActive) {
            this.startProgress();
        }
    }

    startProgress() {
        if (!this.state.progressActive) {
            return;
        }

        let newValue = this.state.progressValue + 1;
        if (newValue > 100) {
            newValue = 0;
        }
        this.setState({ progressValue: newValue });

        requestAnimationFrame(() => this.startProgress());
    }

    render() {
        const { progressActive } = this.state;

        return (
            <div className="progressbar-container">
                <Button
                    className="switch-button"
                    theme="islands"
                    size="s"
                    checked={progressActive}
                    onClick={() => this.setState({ progressActive: !progressActive })}
                >
                    Start
                </Button>
                <ProgressBar theme="islands" value={this.state.progressValue}/>
            </div>
        );
    }
}

render(React.createElement(Showcase), document.getElementById('appshell'));
