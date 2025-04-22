import React from 'react';

const Templates = ({ name, mainLocation, state }) => {
  const stateAbbreviations = {
    Alabama: 'AL', Alaska: 'AK', Arizona: 'AZ', Arkansas: 'AR', California: 'CA',
    Colorado: 'CO', Connecticut: 'CT', Delaware: 'DE', Florida: 'FL', Georgia: 'GA',
    Hawaii: 'HI', Idaho: 'ID', Illinois: 'IL', Indiana: 'IN', Iowa: 'IA',
    Kansas: 'KS', Kentucky: 'KY', Louisiana: 'LA', Maine: 'ME', Maryland: 'MD',
    Massachusetts: 'MA', Michigan: 'MI', Minnesota: 'MN', Mississippi: 'MS', Missouri: 'MO',
    Montana: 'MT', Nebraska: 'NE', Nevada: 'NV', 'New Hampshire': 'NH', 'New Jersey': 'NJ',
    'New Mexico': 'NM', 'New York': 'NY', 'North Carolina': 'NC', 'North Dakota': 'ND',
    Ohio: 'OH', Oklahoma: 'OK', Oregon: 'OR', Pennsylvania: 'PA', 'Rhode Island': 'RI',
    'South Carolina': 'SC', 'South Dakota': 'SD', Tennessee: 'TN', Texas: 'TX', Utah: 'UT',
    Vermont: 'VT', Virginia: 'VA', Washington: 'WA', 'West Virginia': 'WV', Wisconsin: 'WI',
    Wyoming: 'WY'
  };

  const getAbbreviatedState = (state) => stateAbbreviations[state] || state;

  const processTemplate = (template) => {
    const abbrevState = getAbbreviatedState(state);
    
    const formatLocation = (main, region) => region ? `${main}, ${region}` : `${main}`;
    const fullLocation = formatLocation(mainLocation, state);
    const shortLocation = formatLocation(mainLocation, abbrevState);
    const minLocation = formatLocation(mainLocation, '');
  
    // Step 1: Base replacements
    const raw = template.replaceAll('[name]', name);
  
    // Step 2: Try full location
    const full = raw.replaceAll('[location]', fullLocation);
    if (full.length <= 60) return full;
  
    // Step 3: Abbreviated state
    const short = raw.replaceAll('[location]', shortLocation);
    if (short.length <= 60) return short;
  
    // Step 4: Just mainLocation
    const minimal = raw.replaceAll('[location]', minLocation);
    if (minimal.length <= 60) return minimal;
  
    // Step 5: Also abbreviate Real Estate references
    const minimized = minimal
      .replace(/Real Estate Agents/g, 'RE Agents')
      .replace(/Real Estate Agent/g, 'RE Agent');
  
    if (minimized.length <= 60) return minimized;
  
    // Step 6: If still too long, return the minimized anyway
    return minimized;
  };
  
  const templates = {
    '/home': [
      `[name] | [location] Real Estate Agent`,
      `[name] | [location] Realtor`,
      `[name] | [location] Real Estate Agents & Realtors`,
      `Top [location] Real Estate Agents | [name]`,
      `Top [location] Realtors | [name]`,
    ],
    '/team': [
      `[name] | [location] Real Estate Agents`,
      `Meet the [name] Real Estate Group`,
      `[name] - Premier [location] Real Estate Agents`,
      `[name] | Real Estate Agent Serving [location]`,
      `Meet [name] - Your [location] Real Estate Agent`,
    ],
    '/about': [
      `[name] | Real Estate Agent Serving [location]`,
      `Meet [name] - Your [location] Real Estate Agent`,
    ],
    '/properties': [
      `[location] Homes for Sale & Real Estate Listings | [name]`,
      `[location] Homes & Property Listings | [name]`,
      `Find [location] Real Estate Listings | [name]`,
      `[location] Properties for Sale | [name]`,
    ],
    '/properties/sale': [
      `Featured Properties for Sale in [location] | [name]`,
      `Discover Properties for Sale in [location] | [name]`,
      `Explore Properties for Sale in [location] | [name]`,
      `[location] Properties for Sale | [name]`,
      `Find [location] Homes for Sale | [name]`,
      `[location] Real Estate Listings | [name]`,
    ],
    '/properties/sold': [
      `Recently Sold Properties in [location] | [name]`,
      `[location] Homes Sold | Notable Transactions | [name]`,
      `Recently Sold Homes in [location] by [name]`,
      `Recently Sold [location] Homes | [name]`,
      `[location] Recently Sold Homes | [name]`,
      `[location] Recent Home Sales | [name]`,
    ],
    '/neighborhoods': [
      `Comprehensive Guide to [location] Neighborhoods | [name]`,
      `Explore [location] Neighborhoods - A Comprehensive Guide`,
      `Explore [location] Neighborhoods | [name]`,
      `[location] Neighborhood Guides | [name]`,
      `Find Your [location] Dream Area | [name]`,
    ],
    '/blog': [
      `[location] Real Estate & Community Blog | [name]`,
      `[location] Real Estate Blog | [name]`,
      `[location] Real Estate Tips & More | [name]`,
    ],
    '/buyers': [
      `Home Buyers Guide - Tips & Insights for [location] | [name]`,
      `Complete Guide for [location] Home Buyers | [name]`,
      `[location] Home Buyers Guide | [name]`,
      `[location] Home Buying Guide | [name]`,
      `Guide for [location] Home Buyers | [name]`,
      `Tips for Buying a [location] Home | [name]`,
    ],
    '/sellers': [
      `Sell Your Home in [location] - Expert Advice | [name]`,
      `Expert Advice for Selling in [location] | [name]`,
      `Sell Your Home in [location] - Expert Tips | [name]`,
      `Tips for Selling Your [location] Home | [name]`,
    ],
    '/developments': [
      `[location] Developments | [name]`,
      `Latest Developments in [location] | [name]`,
      `New Property Developments in [location] | [name]`,
      `[location] Developments | [name]`,
      `New [location] Developments | [name]`,
      `[location] New Construction Homes | [name]`,
    ],
    '/home-valuation': [
      `Free Home Valuation Tool - Instant [location] Property Estimates | [name]`,
      `Free [location] Home Valuation | [name]`,
      `Personalized [location] Home Valuation | [name]`,
    ],
    '/testimonials': [
      `Client Testimonials & Success Stories | [name]`,
      `Hear What Our Clients Say | [name]`,
    ],
    '/terms-and-conditions': [
      `Terms and Conditions | [name]`,
      `Terms and Conditions | [name] | [location] Real Estate`,
      `Terms and Conditions | [name] | [location] Realtor`,
    ],
    '/404': [
      `404 Page Not Found | [name]`,
      `404 Page Not Found | [name] | [location] Real Estate`,
      `404 Page Not Found | [name] | [location] Realtor`,
    ],
    '/privacy-policy': [
      `Privacy Policy | [name]`,
      `Privacy Policy | [name] | [location] Real Estate`,
      `Privacy Policy | [name] | [location] Realtor`,
    ],
    '/concierge': [
      `Compass Concierge | [name]`,
      `Compass Concierge | [name] | [location] Real Estate`,
      `Compass Concierge | [name] | [location] Realtor`,
    ],
    '/featured-videos': [
      `Featured Videos | [name]`,
      `Featured Videos | [name] | [location] Real Estate`,
      `Featured Videos | [name] | [location] Realtor`,
    ],
    '/press': [
      `Press and Media | [name]`,
      `Press and Media | [name] | [location] Real Estate`,
      `Press and Media | [name] | [location] Realtor`,
    ],
    '/mortgage-calculator': [
      `Mortgage Payment Calculator | [name]`,
      `Mortgage Payment Calculator | [name] | [location] Real Estate`,
      `Mortgage Payment Calculator | [name] | [location] Realtor`,
    ],
    '/contact': [
      `Contact Us | [name]`,
      `Contact Us | [name] | [location] Real Estate Agents`,
      `Get in Touch | [name]`,
      `Get in Touch | [name] | [location] Real Estate Agent`,
    ],
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => alert('Copied to clipboard!'),
      () => alert('Failed to copy!')
    );
  };

  return (
    <div>
      <h2>Generated SEO Titles</h2>
      {Object.entries(templates).map(([route, titles]) => (
        <div key={route}>
          <h3>{route}</h3>
          <ul>
            {titles.map((tpl, index) => {
              const final = processTemplate(tpl);
              return (
                <li key={index}>
                  {final} ({final.length} chars)
                  <button onClick={() => copyToClipboard(final)}>Copy</button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Templates;
