import React, { Component } from 'react';
import companies from '../data/companies';

export default class Company extends Component {

  render() {
    var slug = this.props.routeParams.slug,
      company = companies[slug];

    if (!company) {
      return (<section><div className='inner box error'>Company not found</div></section>);
    }

    return (
      <div className='view view-company'>

        <section className='heading soil'>
          <img className='cover' src={'/assets/covers/' + company.id + '.jpg'} />
          <div className='inner'>

          <img className='logo' src={'/assets/logos/' + company.id + '.svg'} />

          </div>
        </section>

        <section className='sheet'>
          <div className='inner'>

            <h1>{company.name}</h1>

            <h2 className='sub'>{company.headline}</h2>

            <div dangerouslySetInnerHTML={{__html:company.description}} />

            <br />
            <br />

            <a className='button' href={company.url} target='_blank'>View Website</a>

          </div>
        </section>

      </div>
      );

  }

}