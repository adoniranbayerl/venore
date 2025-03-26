# Signin Component Changelog

## Overview

The Signin component returns a JSX with a Sign in box layout, buttons, and other elements. If the user is already logged in, it redirects to `/dashboard` or to value of `?push=` param.

## Files

- **index.tsx**: Exports the default Signin component.
- **signin.tsx**: Contains an async function that calls `getSession()` and passes the result as parameters to `SigninLayout`.
- **signin.layout.tsx**: Defines the layout of the Signin component. It receives a session as a boolean. If true, it calls `RedirectPush()` from `redirecthandler`, which redirects to `/dashboard` if the `?push=` parameter is empty. If `?push=` has a value, it redirects to that value instead.
- **signin.social.button.tsx**: Renders provider buttons.
- **signin.actions.tsx**: Contains async functions for providers to sign in.

## Changelog v1.0.0

- Initial implementation of the Signin component.
- Added redirection logic based on session status.
- Implemented social sign-in buttons.
- Added async functions for provider sign-in.
