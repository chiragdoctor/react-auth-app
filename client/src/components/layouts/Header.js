import React from 'react';

function Header() {
  return (
    <header className='header'>
      <div className='logo-container'>
        <a href='https://preview.oklerthemes.com/porto-admin/2.2.0' className='logo'>
          <img src='img/logo.png' width='75' height='35' alt='Porto Admin' />{' '}
        </a>
        <div
          className='d-md-none toggle-sidebar-left'
          data-toggle-class='sidebar-left-opened'
          data-target='html'
          data-fire-event='sidebar-left-opened'
        >
          <i className='fas fa-bars' aria-label='Toggle sidebar'></i>{' '}
        </div>
      </div>
      <div className='header-right'>
        <form className='search nav-form'>
          <div className='input-group'>
            <input type='text' className='form-control' name='q' id='q' placeholder='Search...' />
            <span className='input-group-append'>
              <button className='btn btn-default' type='submit'>
                <i className='fas fa-search'></i>
              </button>
            </span>
          </div>
        </form>
        <span className='separator'></span>
        <ul className='notifications'>
          <li>
            <a href='#!' className='dropdown-toggle notification-icon' data-toggle='dropdown'>
              <i className='fas fa-tasks'></i>
              <span className='badge'>3</span>
            </a>

            <div className='dropdown-menu notification-menu large'>
              <div className='notification-title'>
                <span className='float-right badge badge-default'>3</span>
                Tasks
              </div>

              <div className='content'>
                <ul>
                  <li>
                    <p className='clearfix mb-1'>
                      <span className='message float-left'>Generating Sales Report</span>
                      <span className='message float-right text-dark'>60%</span>
                    </p>
                    <div className='progress progress-xs light'>
                      <div
                        className='progress-bar'
                        role='progressbar'
                        aria-valuenow='60'
                        aria-valuemin='0'
                        aria-valuemax='100'
                        style={{ width: '60%' }}
                      ></div>
                    </div>
                  </li>

                  <li>
                    <p className='clearfix mb-1'>
                      <span className='message float-left'>Importing Contacts</span>
                      <span className='message float-right text-dark'>98%</span>
                    </p>
                    <div className='progress progress-xs light'>
                      <div
                        className='progress-bar'
                        role='progressbar'
                        aria-valuenow='98'
                        aria-valuemin='0'
                        aria-valuemax='100'
                        style={{ width: '98%' }}
                      ></div>
                    </div>
                  </li>

                  <li>
                    <p className='clearfix mb-1'>
                      <span className='message float-left'>Uploading something big</span>
                      <span className='message float-right text-dark'>33%</span>
                    </p>
                    <div className='progress progress-xs light mb-1'>
                      <div
                        className='progress-bar'
                        role='progressbar'
                        aria-valuenow='33'
                        aria-valuemin='0'
                        aria-valuemax='100'
                        style={{ width: '33%' }}
                      ></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a href='#!' className='dropdown-toggle notification-icon' data-toggle='dropdown'>
              <i className='fas fa-envelope'></i>
              <span className='badge'>4</span>
            </a>

            <div className='dropdown-menu notification-menu'>
              <div className='notification-title'>
                <span className='float-right badge badge-default'>230</span>
                Messages
              </div>

              <div className='content'>
                <ul>
                  <li>
                    <a href='#!' className='clearfix'>
                      <figure className='image'>
                        <img src='img/%21sample-user.jpg' alt='Joseph Doe Junior' className='rounded-circle' />
                      </figure>
                      <span className='title'>Joseph Doe</span>
                      <span className='message'>Lorem ipsum dolor sit.</span>
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='clearfix'>
                      <figure className='image'>
                        <img src='img/%21sample-user.jpg' alt='Joseph Junior' className='rounded-circle' />
                      </figure>
                      <span className='title'>Joseph Junior</span>
                      <span className='message truncate'>
                        Truncated message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet lacinia orci. Proin
                        vestibulum eget risus non luctus. Nunc cursus lacinia lacinia. Nulla molestie malesuada est ac tincidunt. Quisque
                        eget convallis diam, nec venenatis risus. Vestibulum blandit faucibus est et malesuada. Sed interdum cursus dui nec
                        venenatis. Pellentesque non nisi lobortis, rutrum eros ut, convallis nisi. Sed tellus turpis, dignissim sit amet
                        tristique quis, pretium id est. Sed aliquam diam diam, sit amet faucibus tellus ultricies eu. Aliquam lacinia nibh a
                        metus bibendum, eu commodo eros commodo. Sed commodo molestie elit, a molestie lacus porttitor id. Donec facilisis
                        varius sapien, ac fringilla velit porttitor et. Nam tincidunt gravida dui, sed pharetra odio pharetra nec. Duis
                        consectetur venenatis pharetra. Vestibulum egestas nisi quis elementum elementum.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='clearfix'>
                      <figure className='image'>
                        <img src='img/%21sample-user.jpg' alt='Joe Junior' className='rounded-circle' />
                      </figure>
                      <span className='title'>Joe Junior</span>
                      <span className='message'>Lorem ipsum dolor sit.</span>
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='clearfix'>
                      <figure className='image'>
                        <img src='img/%21sample-user.jpg' alt='Joseph Junior' className='rounded-circle' />
                      </figure>
                      <span className='title'>Joseph Junior</span>
                      <span className='message'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet lacinia orci. Proin vestibulum eget risus
                        non luctus. Nunc cursus lacinia lacinia. Nulla molestie malesuada est ac tincidunt. Quisque eget convallis diam.
                      </span>
                    </a>
                  </li>
                </ul>

                <hr />

                <div className='text-right'>
                  <a href='#!' className='view-more'>
                    View All
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href='#!' className='dropdown-toggle notification-icon' data-toggle='dropdown'>
              <i className='fas fa-bell'></i>
              <span className='badge'>3</span>
            </a>

            <div className='dropdown-menu notification-menu'>
              <div className='notification-title'>
                <span className='float-right badge badge-default'>3</span>
                Alerts
              </div>

              <div className='content'>
                <ul>
                  <li>
                    <a href='#!' className='clearfix'>
                      <div className='image'>
                        <i className='fas fa-thumbs-down bg-danger text-light'></i>
                      </div>
                      <span className='title'>Server is Down!</span>
                      <span className='message'>Just now</span>
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='clearfix'>
                      <div className='image'>
                        <i className='fas fa-lock bg-warning text-light'></i>
                      </div>
                      <span className='title'>User Locked</span>
                      <span className='message'>15 minutes ago</span>
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='clearfix'>
                      <div className='image'>
                        <i className='fas fa-signal bg-success text-light'></i>
                      </div>
                      <span className='title'>Connection Restaured</span>
                      <span className='message'>10/10/2017</span>
                    </a>
                  </li>
                </ul>

                <hr />

                <div className='text-right'>
                  <a href='#!' className='view-more'>
                    View All
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <span className='separator'></span>
        <div id='userbox' className='userbox'>
          <a href='#!' data-toggle='dropdown'>
            <figure className='profile-picture'>
              <img src='img/%21logged-user.jpg' alt='Joseph Doe' className='rounded-circle' data-lock-picture='img/%21logged-user.jpg' />
            </figure>
            <div className='profile-info' data-lock-name='John Doe' data-lock-email='johndoe@okler.com'>
              <span className='name'>John Doe Junior</span>
              <span className='role'>administrator</span>
            </div>

            <i className='fa custom-caret'></i>
          </a>

          <div className='dropdown-menu'>
            <ul className='list-unstyled mb-2'>
              <li className='divider'></li>
              <li>
                <a role='menuitem' tabIndex='-1' href='pages-user-profile.html'>
                  <i className='fas fa-user'></i> My Profile
                </a>
              </li>
              <li>
                <a role='menuitem' tabIndex='-1' href='#!' data-lock-screen='true'>
                  <i className='fas fa-lock'></i> Lock Screen
                </a>
              </li>
              <li>
                <a role='menuitem' tabIndex='-1' href='pages-signin.html'>
                  <i className='fas fa-power-off'></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
