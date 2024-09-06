import { ContractType } from "$lib/types";

const traineRadar = {
    shortDescription: 'My first expirience with software development, working with ReactJS and Spring boot for create new.',
}

const contractType: {
    [key in ContractType]: string;   
} = {
    [ContractType.Freelance]: 'Freelance',
    [ContractType.FullTime]: 'Full Time',
    [ContractType.Internship]: 'Internship',
    [ContractType.PartTime]: 'Part Time',
    [ContractType.SelfEmployed]: 'Self Employed',
    [ContractType.Contract]: 'Contract',
};

export default {
    ['trainee-radar']: traineRadar,
    contractType
};