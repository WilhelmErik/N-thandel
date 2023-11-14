import React from 'react'
type FooterProps = {
    text: string;
  };
export default function Footer({ text }: FooterProps) {
    return (
        <footer>
          <p>{text}</p>
        </footer>
      );
}
