<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DownloadFormController extends Controller
{
    public function downloadForm($type)
{
    // Tentukan nama file template dan lokasi penyimpanannya
    if ($type === 'rencana') {
        $fileName = 'template_rencana_diklat.csv'; // Gantilah dengan nama template rencana Anda
        $filePath = public_path('templates/' . $fileName);
    } elseif ($type === 'peserta') {
        $fileName = 'template_peserta_diklat.csv'; // Gantilah dengan nama template peserta Anda
        $filePath = public_path('templates/' . $fileName);
    } else {
        // Jenis form tidak valid, tangani sesuai kebutuhan Anda.
        abort(404);
    }

    // Periksa apakah file template ada
    if (!file_exists($filePath)) {
        abort(404);
    }
    // Atur header respons untuk memaksa browser mengunduh file
    return response()->download($filePath, $fileName, [
        'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // Jenis konten spreadsheet
    ]);

    // Atur header respons untuk memaksa browser mengunduh file
    // return response()->download($filePath, $fileName, [
    //     'Content-Type' => 'application/csv', // Sesuaikan dengan jenis konten yang sesuai
    // ]);
}

}
