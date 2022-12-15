/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { flags, SfdxCommand } from '@salesforce/command';
import { Messages } from '@salesforce/core';
import { AnyJson } from '@salesforce/ts-types';
import * as open from 'open';

import { splitOnEOL } from '../../../helpers/tools';

// Initialize Messages with the current plugin directory
Messages.importMessagesDirectory(__dirname);

// Load the specific messages for this file. Messages from @salesforce/command, @salesforce/core,
// or any library that is using the messages framework can also be loaded this way.
const messages = Messages.loadMessages('@fbmc/sfdx-plugin-open-org-to-url', 'org');

export default class Org extends SfdxCommand {
  public static description = messages.getMessage('commandDescription');

  public static examples = splitOnEOL(messages.getMessage('examples'));

  public static args = [];

  protected static flagsConfig = {
    return: flags.boolean({
      char: 'r',
      description: messages.getMessage('returnFlagDescription'),
    }),
    path: flags.string({
      char: 'p',
      description: messages.getMessage('pathFlagDescription'),
    }),
  };

  // Comment this out if your command does not require an org username
  protected static requiresUsername = true;

  // Comment this out if your command does not support a hub org username
  protected static supportsDevhubUsername = true;

  public async run(): Promise<AnyJson> {
    // this.org is guaranteed because requiresUsername=true, as opposed to supportsUsername
    const { instanceUrl } = this.org.getConnection().getConnectionOptions();

    let destinationUrl = instanceUrl;

    if (this.flags.path) {
      const trimmedUrl = `${this.flags.path}`.replace(/^\//, '');
      destinationUrl += '/' + trimmedUrl;
    }

    if (this.flags.return) {
      this.ux.log(destinationUrl);
    } else {
      open(destinationUrl);
    }

    // Return an object to be displayed with --json
    return {
      orgId: this.org.getOrgId(),
      destinationUrl,
    };
  }
}
