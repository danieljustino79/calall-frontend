export class TranslateUtil{
    static dic = {
        form: {
            name: {'0': 'Name', '1': 'Nome'},
            password: {'0': 'Password', '1': 'Senha'},
            placeholderEmail: {'0': 'Type email', '1': 'Digite email'},
            labelPassword: {'0': 'Password', '1': 'Senha'},
            placeholderPassword: {'0': 'Type password', '1': 'Digite senha'},
            required: {'0': '<b>###field###</b> is a required field.', '1': '<b>###field###</b> é um campo de preenchimento obrigatório.'},
            pattern: {'0': '<b>###field###</b> is not in a recognized pattern.', '1': '<b>###field###</b> não está em um padrão reconhecido.'},
            minlength: {'0': '<b>###field###</b> must be at least ###term2### digits.', '1': '<b>###field###</b> deve ter no mínimo ###term2### dígitos.'},
            ngComponentException: {'0': 'This component need be used with formControlName.', '1': 'Esse componente precisa ser usado com formControlName.'},
            titleFormLogin: {'0': 'Login', '1': 'Autenticação'},
            buttonAccess: {'0': 'Access', '1': 'Acessar'},
        }
    };

    static getMessage(area:string, item:string, param:string[] = undefined){
        let msg = this.dic[area][item][0];
        if(param !== undefined){
            let replace = msg.replace('###field###', param[0]);
            if(param.length > 1)
                replace = replace.replace('###term2###', param[1]);
            return replace;
        }
        
        return msg;
    }

}