type Validations = {
  email?: boolean | 'email',
  minLength?: number,
  maxLength?: number,
  notNull?: boolean | 'notNull'
};

type Options = {
  selectValues?: Array<string | boolean>,
  checkBoxValues?: Array<string>,
  classNames?: Array<string>,
};

type AfterHookValidValues = 'unique' | '';

type BeforeHookValidValues = 'trim' | 'lowercase' | 'titlecase';

export interface QuestionObject {
  question: string,
  answerType: 'string' | 'stringArray' | 'number',
  type: 'input' | 'textarea',
  subType: 'checkbox' | 'select' | 'text' | null,
  required: boolean,
  options?: Options,
  validation?: Validations,
  beforeHooks?: Array<BeforeHookValidValues>,
  afterHooks?: Array<AfterHookValidValues>,
}

const inputList = [
  'E-mail',
  'First Name',
  'Last Name',
  'Tell us a little about yourself',
  'Please tell us a little about yourself.',
  'Other pets you own',
  'Will this be your first cat?',
  'Planning to breed/mate your cat?',
  'Is anyone in your household allergic to cats?',
  'How did you find us?',
  'Where are you from?',
  'City',
  'your city',
  'State',
  'your state',
  'Phone Number',
  'Boy or Girl',
  'Fold or Straight',
  'Eye Color',
  'Fur Color Preference',
  'Budget',
  'Most important',
  'Facebook',
  'Instagram',
];

const INPUT = 'input';
const TEXTAREA = 'textarea';

const mappedQuestions: Array<QuestionObject> = ([
  {
    question: 'Your email',
    answerType: 'string',
    type: 'input',
    subType: 'text',
    required: true,
    options: {

    },
    validation: {
      email: true,
    },
    beforeHooks: [
      'trim',
      'lowercase',
    ],
    afterHooks: [
      'unique',
    ],
  },
  {
    question: 'First Name',
    answerType: 'string',
    type: 'input',
    subType: 'text',
    required: true,
    options: {

    },
    validation: {
      notNull: true,
      minLength: 2,
      maxLength: 30,
    },
    beforeHooks: [
      'trim',
      'titlecase',
    ],
  },
  {
    question: 'Last Name',
    answerType: 'string',
    type: 'input',
    subType: 'text',
    required: true,
    options: {},
    validation: {
      notNull: true,
      minLength: 2,
      maxLength: 30,
    },
    beforeHooks: [
      'trim',
      'titlecase',
    ],
  },
  {
    question: 'Tell us a little about yourself',
    answerType: 'string',
    type: 'textarea',
    subType: null,
    required: true,
    options: {},
    validation: {
      minLength: 10,
      maxLength: 255,
    },
  },
  {
    question: 'Will this be your First Cat?',
    type: 'input',
    answerType: 'boolean',
    subType: 'select',
    required: true,
    options: {
      selectValues: [
        '', 'Yes', 'No',
      ],
    },
    validation: {
      notNull: true,
    },
  },
  {
    question: 'Fur Color Preferences',
    type: 'input',
    answerType: 'stringArray',
    subType: 'checkbox',
    required: true,
    options: {
      checkBoxValues: [
        'white',
        'silver',
        'blue',
        'black',
      ],
    },
    validation: {},
  },
  {
    question: 'Facebook',
    type: 'input',
    answerType: 'string',
    subType: 'text',
    required: false,
    options: {},
    validation: {},
    beforeHooks: [
      'trim',
    ],
  },
]);

export default mappedQuestions;
