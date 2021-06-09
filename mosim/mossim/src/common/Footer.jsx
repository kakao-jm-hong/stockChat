import React, { Component } from 'react';
import style from './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className={style.footer}>
                <div className={style.top}>
                    <ul className={style.tag}>
                        <li>ONLINE COMMUNITY</li>
                        <li><a href="https://www.facebook.com/profile.php?id=100003610064311">페이스북</a></li>
                        <li><a href="https://www.instagram.com/eunsu_su/">인스타그램</a></li>
                        <li><a href="https://twitter.com/elonmusk"></a>트위터</li>
                        <li><a href="https://www.youtube.com/channel/UCpMole-yL6XHhBr4Sd34D3A"></a>유튜브</li>
                    </ul>
                    <ul className={style.tag}>
                        <li>RECRUIT</li>
                        <li><a href="\#">채용 소개</a></li>
                        <li><a href="\#">채용 지원하기</a></li>
                    </ul>
                </div>
                <div className={style.menue}>
                    <a href="\#" className={style.item}>찾아오시는 길</a>
                    <a href="\#" className={style.item}>신규입점제의</a>
                    <a href="\#" className={style.item}>사이트 맵</a>
                </div>
                <div className={style.subMenue}>
                    <a href="\#" className={style.item}>개인정보처리방침</a>
                    <a href="\#" className={style.item}>홈페이지 이용약관</a>
                </div>
                <ul className={style.private}>
                    <li>사업자등록번호 : 000-00-00000</li>
                    <li>(주)모심 : 황은수</li>
                    <li>TEL : 010-3907-3867</li>
                </ul>

                <small>© Mosim.</small>
            </div>
        );
    }
}

export default Footer;