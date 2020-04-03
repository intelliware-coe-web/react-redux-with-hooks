import React from 'react';

export default {
  title: 'Tables',
};

export const defaultView = () =>
  <table className="uk-table">
    <caption>Table Caption</caption>
    <thead>
    <tr>
      <th>Table Heading</th>
      <th>Table Heading</th>
      <th>Table Heading</th>
    </tr>
    </thead>
    <tfoot>
    <tr>
      <td>Table Footer</td>
      <td>Table Footer</td>
      <td>Table Footer</td>
    </tr>
    </tfoot>
    <tbody>
    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>
    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>
    </tbody>
  </table>;

export const withDividers = () =>
  <table className="uk-table uk-table-divider">
    <thead>
    <tr>
      <th>Table Heading</th>
      <th>Table Heading</th>
      <th>Table Heading</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>
    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>
    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>
    </tbody>
  </table>;

export const withStriping = () =>
  <table className="uk-table uk-table-striped">
    <thead>
    <tr>
      <th>Table Heading</th>
      <th>Table Heading</th>
      <th>Table Heading</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>
    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>
    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>
    </tbody>
  </table>;

export const withHover = () =>
  <table className="uk-table uk-table-hover uk-table-divider">
    <thead>
    <tr>
      <th>Table Heading</th>
      <th>Table Heading</th>
      <th>Table Heading</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>
    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>
    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>
    </tbody>
  </table>;

export const withSizeModifiers = () =>
  <table className="uk-table uk-table-small uk-table-divider">
    <thead>
    <tr>
      <th>Table Heading</th>
      <th>Table Heading</th>
      <th>Table Heading</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>
    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>
    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>
    </tbody>
  </table>;

export const withJustification = () =>
  <table className="uk-table uk-table-justify uk-table-divider">
    <thead>
    <tr>
      <th className="uk-width-small">Table Heading</th>
      <th>Table Heading</th>
      <th>Table Heading</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Table Data</td>
      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </td>
      <td>
        <button className="uk-button uk-button-default" type="button">Button</button>
      </td>
    </tr>
    <tr>
      <td>Table Data</td>
      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </td>
      <td>
        <button className="uk-button uk-button-default" type="button">Button</button>
      </td>
    </tr>
    </tbody>
  </table>;

export const withAlignment = () =>
  <table className="uk-table uk-table-middle uk-table-divider">
    <thead>
    <tr>
      <th className="uk-width-small">Table Heading</th>
      <th>Table Heading</th>
      <th>Table Heading</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Table Data</td>
      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </td>
      <td>
        <button className="uk-button uk-button-default" type="button">Button</button>
      </td>
    </tr>
    <tr>
      <td>Table Data</td>
      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </td>
      <td>
        <button className="uk-button uk-button-default" type="button">Button</button>
      </td>
    </tr>
    </tbody>
  </table>;


export const withResponsive = () =>
  <div className="uk-overflow-auto">
    <table className="uk-table uk-table-small uk-table-divider">
      <thead>
      <tr>
        <th>Table Heading</th>
        <th>Table Heading</th>
        <th>Table Heading</th>
        <th>Table Heading</th>
        <th>Table Heading</th>
        <th>Table Heading</th>
        <th>Table Heading</th>
        <th>Table Heading</th>
        <th>Table Heading</th>
        <th>Table Heading</th>
        <th>Table Heading</th>
        <th>Table Heading</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
      </tr>
      <tr>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
      </tr>
      <tr>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
        <td>Table Data</td>
      </tr>
      </tbody>
    </table>
  </div>;

export const withStacking = () =>
  <table className="uk-table uk-table-responsive uk-table-divider">
    <thead>
    <tr>
      <th>Table Heading</th>
      <th>Table Heading</th>
      <th>Table Heading</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>
    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>
    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>
    </tbody>
  </table>;

export const withColumnModifiers = () =>
  <table className="uk-table uk-table-divider">
    <thead>
    <tr>
      <th className="uk-table-shrink">Shrink</th>
      <th className="uk-table-expand">Expand</th>
      <th className="uk-width-small">Width Small</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>
    <tr>
      <td>Table Data</td>
      <td>Table Data</td>
      <td>Table Data</td>
    </tr>
    </tbody>
  </table>;
