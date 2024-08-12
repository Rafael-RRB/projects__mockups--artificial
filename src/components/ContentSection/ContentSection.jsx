import "./ContentSection.css";
import { useState } from 'react';

function ContentSection(props) {
  const HeadingLevel = `h${props.object.headingLevel}`;
  const identifier = props.object.identifier;
  const modifier = props.object.modifier === undefined ? '' : `--${props.object.modifier}`;
  const title = props.object.title;
  const text = props.object.text;
  const src = props.object.src;
  const alt = props.object.alt;
  const sizes = props.object.sizes;
  
  let pictureArray = [];

  // "ContentSection" wasn't as reusable as I thought, when I started adding Desktop CSS...
  const classes = {
    sec: `content__images${modifier !== undefined ? ` content__images${modifier}` : ''}`,
    secPic: `content__image${modifier !== undefined ? ` content__image${modifier}` : ''}`,
    secPicSrc: `image__decoration${modifier !== undefined ? ` image__decoration${modifier}` : ''}`,
    secPicImg: `image__decoration${modifier !== undefined ? ` image__decoration${modifier}` : ''}`,
    art: `articles__content${modifier !== undefined ? ` articles__content${modifier}` : ''}`,
    artSec: `content__text${modifier !== undefined ? ` content__text${modifier}` : ''}`,
    artHdg: `text__heading${modifier !== undefined ? ` text__heading${modifier}` : ''}`,
    artTxt: `text__paragraph${modifier !== undefined ? ` text__paragraph${modifier}` : ''}`,
  }

  if(src !== undefined) {
    src.forEach((currentSource, index) => pictureArray.push(
      (
        <picture className={`${classes.secPic}`} key={`picture-${identifier}-${index}`}>
          <source media='(max-width: 280px)' srcSet={`${currentSource}--240p.webp`} />
          <source media='(max-width: 767px)' srcSet={`${currentSource}--256p.webp`} />
          <source media='(max-width: 1399px)' srcSet={`${currentSource}--384p.webp`} />
          <source media='(max-width: 1919px)' srcSet={`${currentSource}--512p.webp`} />
          <source media='(max-width: 2559px)' srcSet={`${currentSource}--640p.webp`} />
          <source media='(max-width: 3199px)' srcSet={`${currentSource}--768p.webp`} />
          <source media='(max-width: 3839px)' srcSet={`${currentSource}--896p.webp`} />
          <img className={`${classes.secPicImg}`} src={`${currentSource}--1024p.webp`} width={sizes[0]} height={sizes[1]} alt={`${alt}`} loading="lazy" />
        </picture>
      )
    ));
  }

  return(
    <article className={`${classes.art}`}>
      {pictureArray.length > 1 ? <section className={`${classes.sec}`}>{pictureArray}</section> : pictureArray}
      
      <section className={`${classes.artSec}`}>
        <HeadingLevel className={`${classes.artHdg}`} >{title}</HeadingLevel>
        <p className={`${classes.artTxt}`} >{text}</p>
      </section>
    </article>
  );
}

export default ContentSection;