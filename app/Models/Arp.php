<?php

namespace App\Models;

use App\Models\ArpRencanaPe;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Arp extends Model
{
    use HasFactory;
    protected $table = 'arp';

    protected $fillable = [
        'tanggal_mulai',
        'tanggal_selesai',
        'kode',
        'judul',
        'jenis_permintaan_diklat',
        'jenis_pelaksanaan_diklat',
        'angkatan',
        'instruktur',
        'rencana_peserta',
        'realisasi_peserta',
        'kelas',
        'wisma',
        'persiapan',
        'pelaksanaan',
        'pasca',
        'realisasi_biaya',
        'aksi',
    ];

    // rencana peserta
    // public function ArpRencanaPe()
    // {
    //     return $this->hasOne(ArpRencanaPe::class, 'tanggal_mulai', 'tanggal_mulai');
    // }
    // public function ArpRencanaPe()
    // {
    //     return $this->hasOne(ArpRencanaPe::class, 'tanggal_mulai', 'tanggal_mulai', 'kode', 'judul', 'angkatan');
    // }

     // Relasi One-to-Many ke model User
     public function users()
     {
         return $this->hasMany(User::class, 'arp_id', 'id');
     }
    
}