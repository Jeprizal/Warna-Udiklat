<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Warna - PLN Udiklat Padang</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="{{ asset('landing_page/img/resize.png') }}" rel="icon">
  <link href="{{ asset('landing_page/img/resize.png') }}" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="{{ asset('landing_page/vendor/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">
  <link href="{{ asset('landing_page/vendor/bootstrap-icons/bootstrap-icons.css') }}" rel="stylesheet">  

  <!-- Template Main CSS File -->
  <link href="{{ asset('kuliner/css/app.css') }}" rel="stylesheet">

  <!-- ini untuk modal -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  
  <!-- <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script> -->

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

  <!-- fungsi aktif menu -->
  <style>
    .navbar .menu .navbar-item.active a {
    color: #00A2B9; 
  }
  #loading2 {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.7); /* Latar belakang semi-transparan */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999; /* Atur z-index untuk menempatkan elemen loading di atas konten lain */
    }
    body #hero{
      background-image: url('kuliner/images/kuliner/dashboard_Kuliner.jpg');
      margin-top: 0%;
    }
    body .kuliner-menu{
      background-image: url('kuliner/images/kuliner/background_bawang.jpg');
    }
  </style>
  </head>
  <body>
    @include('layouts.kwt.circular.menu')
    <div id="loading2" class="text-center">
        <div class="spinner-border" role="status"></div>
        <p>Loading...</p>
    </div>
    <section id="topbar" class="d-flex align-items-center">
      <div class="container d-flex justify-content-center justify-content-md-between">
        <div class="contact-info d-flex align-items-center">
          <i class="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">udiklat.padang@gmail.com</a></i>
          <i class="bi bi-phone d-flex align-items-center ms-4"><span>(+62) 821-7278-5770</span></i>
        </div>
        <div class="social-links d-none d-md-flex align-items-center">
          <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="https://instagram.com/pln.updl.padang" class="instagram"><i class="bi bi-instagram"></i></a>
          <a href="https://youtube.com/@updlpadang6399" class="youtube"><i class="bi bi-youtube"></i></a>
        </div>
      </div>
    </section>
        <!-- ======= Header ======= -->
        <header id="header" class="d-flex align-items-center">
          <div class="container d-flex justify-content-between align-items-center">
            <div class="logo" >
              <a href="{{ route('wlcm') }}"><img src="{{asset('assets/images/mockup2.1.png')}}" alt="" class="img-fluid"></a>
            </div>
            <nav id="navbar" class="navbar active">
              <ul class="menu">
                <li class="navbar-item {{ request()->is('/*') ? 'active' : '' }}"><a href="{{ route('dashboardkuliner.index') }}">Kembali ke Halaman Sebelumnya</a></li>
                
                
              <li class="navbar-item"><a href=""></a></li>
              <li class="navbar-item"><a href=""></a></li>
            </ul>        
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <!-- .navbar -->
        </div>
      </header>
      
    
    <main class="py-4">
        @yield('content')
    </main>
    <script src="{{ asset('kuliner/js/main.js') }}"></script>

    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>


  </body>
</html>