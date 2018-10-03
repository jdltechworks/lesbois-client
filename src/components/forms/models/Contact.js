export const CONTACT = {
    name: {
        tag: 'input',
        type: 'text',
        label: 'Name',
        validator: 'isAlpha'
    },
    email: {
        tag: 'input',
        type: 'email',
        label: 'Email',
        validator: 'isEmail'
    },
    message: {
        tag:'textarea',
        type:'textarea',
        label:'Tell something',
        rows: 4,
        validator: 'isAlpha'
    }
}
