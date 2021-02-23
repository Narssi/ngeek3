import {FooterImg} from '../Data/footer-img';

export const getIcons = (id) => {
    return FooterImg.find( hero => hero.id === id );
}