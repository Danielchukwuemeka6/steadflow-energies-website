// SteadFlow — account page (sign up / login) using Supabase Auth

document.addEventListener('DOMContentLoaded', async () => {
  const configWarning = document.getElementById('config-warning');
  if (!SUPABASE_CONFIGURED) {
    configWarning.hidden = false;
  }

  /* ---- tab switching ---- */
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.auth-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(`panel-${tab.dataset.tab}`).classList.add('active');
    });
  });

  /* ---- show/hide company name field based on role ---- */
  document.querySelectorAll('input[name="role"]').forEach(radio => {
    radio.addEventListener('change', () => {
      const wrap = document.getElementById('signup-company-wrap');
      wrap.hidden = document.querySelector('input[name="role"]:checked').value !== 'vendor';
    });
  });

  if (!SUPABASE_CONFIGURED) return; // rest of this file needs a real Supabase connection

  /* ---- check if already logged in ---- */
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (session) await showAccountView(session.user);

  /* ---- sign up ---- */
  document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = document.getElementById('signup-message');
    const role = document.querySelector('input[name="role"]:checked').value;
    const fullName = document.getElementById('signup-name').value;
    const company = document.getElementById('signup-company').value;
    const phone = document.getElementById('signup-phone').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    msg.hidden = false;
    msg.textContent = 'Creating your account...';

    const { data, error } = await supabaseClient.auth.signUp({ email, password });

    if (error) {
      msg.textContent = error.message;
      msg.style.color = 'var(--alert-500)';
      return;
    }

    // Create the matching profile row
    const { error: profileError } = await supabaseClient.from('profiles').insert({
      id: data.user.id,
      full_name: fullName,
      phone: phone,
      role: role,
      company_name: role === 'vendor' ? company : null,
    });

    if (profileError) {
      msg.textContent = 'Account created, but profile setup failed: ' + profileError.message;
      msg.style.color = 'var(--alert-500)';
      return;
    }

    msg.textContent = 'Account created! Check your email to confirm, then log in.';
    msg.style.color = 'var(--canopy-600)';
    e.target.reset();
  });

  /* ---- log in ---- */
  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const msg = document.getElementById('login-message');
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    msg.hidden = false;
    msg.textContent = 'Logging in...';

    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });

    if (error) {
      msg.textContent = error.message;
      msg.style.color = 'var(--alert-500)';
      return;
    }

    await showAccountView(data.user);
  });

  /* ---- log out ---- */
  document.getElementById('logout-btn').addEventListener('click', async () => {
    await supabaseClient.auth.signOut();
    location.reload();
  });

  async function showAccountView(user) {
    const { data: profile } = await supabaseClient
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    document.getElementById('auth-forms').style.display = 'none';
    const view = document.getElementById('account-view');
    view.style.display = 'block';
    document.getElementById('account-name').textContent = profile?.full_name || user.email;
    document.getElementById('account-role').textContent = profile?.role === 'vendor'
      ? `Vendor account — ${profile.company_name || ''}`
      : 'Customer account';
  }
});
