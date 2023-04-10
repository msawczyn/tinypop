import React from 'react';


interface HeaderProps {
   title?: string;
}

const Header = (props: HeaderProps) => {
    const { title } = props;
    return (
       <div className="header">&nbsp;</div>
       );
}

export default Header;
