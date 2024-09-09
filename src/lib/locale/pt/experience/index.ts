import traineeRadarDescription from './md/trainee-radar.md?raw';
import juniorDeveloperRadarDescription from './md/junior-software-developer.md?raw';
import { ContractType } from "$lib/types";

const traineRadar = {
    description: traineeRadarDescription,
    shortDescription: 'Minha primeira experiência com desenvolvimento de software profissional foi como desenvolvedor full stack, onde pude me desenvolver em diversas tecnologias e frameworks.',
    name: 'Estagiário na Radar Saúde',
    title: 'Estagiário',
}

const juniorDeveloperRadar = {
    description: juniorDeveloperRadarDescription,
    shortDescription: 'Minha primeira experiência em período integral, como desenvolvedor efetivo, permitiu que eu me encarregasse de funcionalidades mais complexas e desafiadoras.',
    name: 'Desenvolvedor Júnior na Radar Saúde',
    title: 'Desenvolvedor Júnior',
}

const contractType: {
    [key in ContractType]: string;   
} = {
    [ContractType.Freelance]: 'Freelance',
    [ContractType.FullTime]: 'Tempo Integral',
    [ContractType.Internship]: 'Estágio',
    [ContractType.PartTime]: 'Meio Período',
    [ContractType.SelfEmployed]: 'Autônomo',
    [ContractType.Contract]: 'Contrato',
};

export default {
    ['trainee-radar']: traineRadar,
    ['junior-software-developer']: juniorDeveloperRadar,
    contractType
};