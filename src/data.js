export const cards = [
    { 
        id: 'clientes', 
        label: 'Clientes', 
        items: [
            {
                id: 'cliente-1', 
                label: 'Cliente 1', 
                value: true
            }, 
            {
                id: 'cliente-2', 
                label: 'Cliente 2', 
                value: false
            }
        ]
    },
    { 
        id: 'tipos-demanda', 
        label: 'Tipos de Demanda', 
        items: [
            {
                id: 'novo-sistema', 
                label: 'Novo Sistema', 
                value: false
            }, 
            {
                id: 'demanda-evolutiva', 
                label: 'Demanda Evolutiva', 
                value: true
            }
        ]
    },
    { 
        id: 'data-conclusao', 
        label: 'Data de Conclusão', 
        items: [
            {
                id: 'data-inicio', 
                label: 'Data Início', 
                value: '13/02/2021'
            }, 
            {
                id: 'data-final', 
                label: 'Data Final', 
                value: '16/03/2021'
            }
        ] 
    }
];

export const statistics = {
    demands: 54,
    variants: 50,
    activities: 40, 
    duration: '120 dias',
    mean: 30,
}