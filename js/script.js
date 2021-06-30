
const app = new Vue(
    {
        el: '#app',
        data:{
            contacts: [
                {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
                },
                {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
                }
                ],
                },
                {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [
                {
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
                },
                {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
                },
                {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
                },
                ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avatar_3.jpg',
                    visible: true
                },
                {
                    name: 'Luisa',
                    avatar: 'img/avatar_4.jpg',
                    visible: true
                }
            ],
            indice : 0,
            messaggio: '',
        },
        methods: {
            selezionaUtente(indice){
                this.indice = indice;
            },
            data(){
                return dayjs().format('DD/MM/YYYY') + ' ' + dayjs().format('HH:mm:ss');
            },
            messaggioAuto(){
                const ArrayMessage = this.contacts[this.indice].messages;
                ArrayMessage.push({
                    date: this.data(),
                    text: 'ok',
                    status: 'received'
                });
            },
            aggiuntaMessaggio(){

                const ArrayMessage = this.contacts[this.indice].messages;
                let messaggio = this.messaggio;

                if(messaggio != ''){
                    ArrayMessage.push({
                        date: this.data(),
                        text: messaggio,
                        status: 'sent'
                    });
                    setTimeout(this.messaggioAuto, 1000);
                }

                this.messaggio = '';
            }
        }
    }
);

