package sapozhnikov.diplom.server.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
@NoArgsConstructor(force = true)
@Data
public class DataStatus {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private int softInterruptsCount;
    private int activeUserSystem;
    private double cpuTemp;
    private double gpuTemp;
    private double virtualMemoryPercentUsage;
    private double diskPercentUsage;

    @Override
    public String toString() {
        return "DataStatus{" +
                "id=" + id +
                ", softInterruptsCount=" + softInterruptsCount +
                ", activeUserSystem=" + activeUserSystem +
                ", cpuTemp=" + cpuTemp +
                ", gpuTemp=" + gpuTemp +
                ", virtualMemoryPercentUsage=" + virtualMemoryPercentUsage +
                ", diskPercentUsage=" + diskPercentUsage +
                '}';
    }
}
