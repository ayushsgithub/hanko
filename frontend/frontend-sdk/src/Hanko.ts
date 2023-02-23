import { ConfigClient } from "./lib/client/ConfigClient";
import { PasscodeClient } from "./lib/client/PasscodeClient";
import { PasswordClient } from "./lib/client/PasswordClient";
import { UserClient } from "./lib/client/UserClient";
import { WebauthnClient } from "./lib/client/WebauthnClient";
import { EmailClient } from "./lib/client/EmailClient";
import { ThirdPartyClient } from "./lib/client/ThirdPartyClient";

/**
 * A class that bundles all available SDK functions.
 *
 * @param {string} api - The URL of your Hanko API instance
 * @param {number=} timeout - The request timeout in milliseconds
 */
class Hanko {
  api: string;
  config: ConfigClient;
  user: UserClient;
  webauthn: WebauthnClient;
  password: PasswordClient;
  passcode: PasscodeClient;
  email: EmailClient;
  thirdParty: ThirdPartyClient;

  // eslint-disable-next-line require-jsdoc
  constructor(api: string, timeout = 13000) {
    this.api = api;
    /**
     *  @public
     *  @type {ConfigClient}
     */
    this.config = new ConfigClient(api, timeout);
    /**
     *  @public
     *  @type {UserClient}
     */
    this.user = new UserClient(api, timeout);
    /**
     *  @public
     *  @type {WebauthnClient}
     */
    this.webauthn = new WebauthnClient(api, timeout);
    /**
     *  @public
     *  @type {PasswordClient}
     */
    this.password = new PasswordClient(api, timeout);
    /**
     *  @public
     *  @type {PasscodeClient}
     */
    this.passcode = new PasscodeClient(api, timeout);
    /**
     *  @public
     *  @type {EmailClient}
     */
    this.email = new EmailClient(api, timeout);
    /**
     *  @public
     *  @type {ThirdPartyClient}
     */
    this.thirdParty = new ThirdPartyClient(api, timeout);
  }
}

export { Hanko };
