import * as React from 'react';
import styles from './SpGithub.module.scss';
import { ISpGithubProps } from './ISpGithubProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpGithub extends React.Component<ISpGithubProps, {}> {
  public render(): React.ReactElement<ISpGithubProps> {
    return (
      <div className={ styles.spGithub }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint CI CD Process Using Azure!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
