import { IHTMLFormControl, InputTypes, PasswordInput, TextInput } from 'src/app/lib/core/components/dynamic-inputs/core';

type ConfigsBuilderFn = (
  translations: {
    [index: string]: any
  },
  rememberControl?: false,
  defaults?: { username: string, password: string }
) => IHTMLFormControl[];
export const buildLoginFormControlObj: ConfigsBuilderFn =
  (translations?, rememberControl?, defaults = {} as { username: string, password: string }) => [
    {
      label: translations['login.username'] ? translations['login.username'] : 'Nom utilisateur',
      type: InputTypes.TEXT_INPUT,
      placeholder: translations['login.username'] ? translations['login.username'] : 'Nom utilisateur',
      formControlName: 'login',
      classes: 'clr-input',
      rules: {
        isRequired: true,
        maxLength: true
      },
      maxLength: 100,
      value: defaults.username || null
    } as TextInput,
    {
      label: translations['login.password'] ? translations['login.password'] : 'Mot de passe',
      type: InputTypes.PASSWORD_INPUT,
      placeholder: translations['login.password'] ? translations['login.password'] : 'Mot de passe',
      formControlName: 'password',
      classes: 'clr-input',
      pattern: '((?=[a-zA-Z]*)(?=d*)(?=[~!@#$%^&*()/-_]*).{4,})',
      rules: {
        isRequired: true,
        pattern: true
      },
      minLength: 4,
      value: defaults.password || null
    } as PasswordInput,
    // Add Remember control if required
  ];

